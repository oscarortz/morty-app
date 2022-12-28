import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = () =>
    setAuth({
      id: 1,
      name: "oscar",
    });

  const logout = () => setAuth(null);

  const data = { auth, login, logout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
