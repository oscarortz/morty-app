import React, { useContext } from "react";
import AuthContext from "../contexto/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedPages = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  return <div>{!auth ? <Navigate to="/" /> : <Outlet />}</div>;
};
