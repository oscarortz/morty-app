import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../contexto/AuthContext";

export const PublicPage = () => {
  const { auth } = useContext(AuthContext);
  // console.log(auth);
  return (
    <>
      <h1>Bienvenido...</h1>
      <h2>Logueate para ver el contenido</h2>
      {auth ? <Navigate to="/" /> : ""}
    </>
  );
};
