import React, { useContext } from "react";
import AuthContext from "../contexto/AuthContext";

export const AutenticationPage = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return <h2>Logueate para ver el contenido</h2>;
};
