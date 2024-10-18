// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../composables/useAuth"; // Composable for authentication state

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Check if the user is authenticated

  if (!isAuthenticated) {
    // If user is not authenticated, redirect to Sign In
    return <Navigate to="/signin" />;
  }

  // If user is authenticated, render the protected component
  return <Outlet />;
};

export default ProtectedRoute;
