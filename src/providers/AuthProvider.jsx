import { useEffect, useState, useContext, createContext } from 'react'

const defaultAuthData = {
    isLoggedIn: false,
    login: () => { },
    logout: () => { },
    user: null,
}

const AuthContext = createContext(defaultAuthData);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem('user');
            if (!user) {
                setUser(null);
            } else {
                setUser(JSON.parse(user));
                setIsLoggedIn(!!JSON.parse(user));
            }
        }
    }, []);

    const login = (user) => {
        const { token, admin } = user;
        localStorage.setItem('user', JSON.stringify(admin));
        localStorage.setItem("token", token);
        setUser(user);
        setIsLoggedIn(true);
    };
    const userLogout = () => {
        localStorage.clear();
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}