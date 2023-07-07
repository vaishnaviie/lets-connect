import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequiresAuthh = () => {
  const { AuthState } = useAuth();
  const location = useLocation();
  return AuthState?.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/landing" state={{ from: location }} replace />
  );
};

export default RequiresAuthh;
