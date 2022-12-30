import { createContext, useCallback, useMemo, useState } from "react";

const MY_AUTH_APP = "MY_AUTH_APP_1";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setAuth(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuth(false);
  }, []);

  const data = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth, login, logout]
  );

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
