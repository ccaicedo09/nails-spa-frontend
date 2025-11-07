import { useEffect, useState } from "react";
import { checkCredentials } from "../api/auth";

type AuthState = "loading" | "authenticated" | "unauthenticated";

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>("loading");
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    checkCredentials()
      .then(({ data }: any) => {
        if (data.authenticated) {
          setAuth("authenticated");
          setRole(data.role || null);
        } else {
          setAuth("unauthenticated");
        }
      })
      .catch(() => setAuth("unauthenticated"));
  }, []);

  return { auth, role }
}