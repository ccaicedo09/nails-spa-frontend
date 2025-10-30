import { ReactNode, useEffect, useState } from "react";
import { isAuthenticatedContext } from "./IsAuthenticatedContext";
import { checkCredentials } from "../api/auth";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await checkCredentials();
        setIsAuthenticated(!!data.authenticated);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    verifyAuth();
  }, []);

  return (
    <isAuthenticatedContext.Provider  value={{ isAuthenticated, setIsAuthenticated } as any}>
      {children}
    </isAuthenticatedContext.Provider>
  );
};

export default AuthProvider