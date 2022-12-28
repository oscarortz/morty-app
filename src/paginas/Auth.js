import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AuthContext from "../contexto/AuthContext";

const Auth = () => {
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">
        <button onClick={handleAuth}>{auth ? "Login" : "Logout"}</button>
      </Link>
    </div>
  );
};

export default Auth;
