import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AUTH_KEY = "auth";
const USER_KEY = "auth_user";

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(AUTH_KEY) === "true"
  );

  const [usuario, setUsuario] = useState(
    localStorage.getItem(USER_KEY) || ""
  );

  const login = (correo = "") => {
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(USER_KEY, correo);
    setIsAuthenticated(true);
    setUsuario(correo);
  };


  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
    setIsAuthenticated(false);
    setUsuario("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
