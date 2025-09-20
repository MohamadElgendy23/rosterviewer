import { createContext, useState, useEffect } from "react";
import { checkAuth } from "../utils/auth"; // your checkAuth function

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On app load, verify token with backend
  useEffect(() => {
    async function verify() {
      const valid = await checkAuth();
      setIsAuthenticated(valid);
    }
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
