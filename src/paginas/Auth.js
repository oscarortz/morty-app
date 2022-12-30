import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexto/AuthContext";

const Auth = () => {
  const { auth, login, logout } = useContext(AuthContext);
  //console.log(auth);
  return (
    <div>
      <button onClick={login} disabled={!!auth}>
        Login
      </button>
      <button onClick={logout} disabled={!auth}>
        Logout
      </button>
    </div>
  );
};

export default Auth;
