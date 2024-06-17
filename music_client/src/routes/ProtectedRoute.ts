// ProtectedRoute.js
import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("music_app_access_token");
};

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    useEffect(() => {
      navigate("/");
    }, []);

    return null;
  }

  return children;
};

export default ProtectedRoute;
