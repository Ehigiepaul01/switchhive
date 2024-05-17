import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "@/providers/AuthProvider";
import LoadingSpinner from "@/components/loading";
import { useToast } from '@/components/ui/use-toast'

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [isToken, setIsToken] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate an asynchronous check for authentication status
    const checkAuthentication = async () => {
      // Replace the setTimeout with your actual authentication check
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const storedToken = localStorage.getItem("token");
      setIsToken(storedToken);
      // Update loading state
      setLoading(false);

      // Trigger the toast outside the rendering cycle
      if (storedToken === null) {
        toast({
          description: "Please sign in to continue",
          variant: "error",
          duration: 2000,
        });
      }
    };

    checkAuthentication();
  }, [isToken, isLoggedIn, toast]);
  if (loading) {
    // Show the loading spinner while checking authentication
    return <LoadingSpinner className={`sm:-ml-72`} />;
  }

  if (!isLoggedIn && isToken == null) {
    // Redirect to login if not authenticated
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
