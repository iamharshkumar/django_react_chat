import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Navigate } from "react-router-dom";


export function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}