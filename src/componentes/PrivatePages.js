import React, { useContext } from "react";
import AuthContext from "../contexto/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivatePages = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Navigate to="/login" />;

  return <Outlet />;
};
