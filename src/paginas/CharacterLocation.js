import React, { useContext } from "react";
import PersonajesLocacion from "../componentes/PersonajesLocacion";
import AuthContext from "../contexto/AuthContext";

function CharacterLocation() {
  const { auth } = useContext(AuthContext);
  return <div>{auth ? <h1>Login</h1> : <PersonajesLocacion />}</div>;
}

export default CharacterLocation;
