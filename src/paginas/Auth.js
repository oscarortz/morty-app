import React, { useContext } from "react";
import AuthContext from "../contexto/AuthContext";

const Auth = () => {
  const { auth, login, logout } = useContext(AuthContext);
  //console.log(auth);
  return (
    <div>
      {auth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Auth;
