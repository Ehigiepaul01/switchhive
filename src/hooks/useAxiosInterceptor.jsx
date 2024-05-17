import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/providers/AuthProvider';

const useAxiosInterceptor = () => {
    const { toast } = useToast();
    const isToastShownRef = useRef(false);
    const navigate = useNavigate();
    const { userLogout } = useAuthContext();

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                return response
            },
            (error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        const tokenExpired = error.response.data.message === 'Invalid token' || error.response.data.message === 'Unauthorized';
                        if (tokenExpired) {
                            // Token is expired, redirect to login page
                           navigate("/auth")
                           userLogout();
                        }
                    }
                        const message =
                            error.response.data.message ||
                            error.response?.data?.data?.error?.message ||
                            error?.response?.data?.data?.message ||
                            error?.response?.data?.message ||
                            error.message;
                        toast({
                            description: `${message} Please try again.` || "An error occurred",
                            variant: "error",
                            duration: 2000,
                        });
                        isToastShownRef.current = true;
                    }
                    return Promise.reject(error)
                })
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, [])
}

export default useAxiosInterceptor
