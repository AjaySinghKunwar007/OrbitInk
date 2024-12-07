import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const [isLoading, setIsLoading] = useState(true); // Tracks the loading state
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status); // Gets authentication status from Redux
  useEffect(() => {
    // Handle authentication checks
    const handleAccess = async () => {
      try {
        if (authentication && authStatus !== authentication) { // (authentication && !authStatus)
          // Redirect unauthenticated users to login
          navigate("/login");
        } else if (!authentication && authStatus !== authentication) { // (!authentication && authStatus)
          // Redirect authenticated users to the home page
          navigate("/");
        } else {
          // Access allowed
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error during navigation:", error);
      }
    };
    handleAccess();
  }, [authStatus, authentication, navigate]);

  // Show a loading spinner while access is being validated
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" />
        <span className="ml-2 text-lg">Loading...</span>
      </div>
    );
  }

  // Render children if access is granted
  return <>{children}</>;
}
