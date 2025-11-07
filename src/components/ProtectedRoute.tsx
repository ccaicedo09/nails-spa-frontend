import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { JSX } from "react";

type Role = "customer" | "admin" | "employee" | "manager"

interface ProtectedRouteProps {
  children: JSX.Element
  allowed?: Role[]
}

function ProtectedRoute({ children, allowed }: ProtectedRouteProps) {
  const { auth, role } = useAuth()

  if (auth === "loading") {
    return (
      <div style={{ minHeight: "calc(100vh - 190px)" }} className="flex items-center justify-center text-gray-600 text-lg">
        Cargando autenticación...
      </div>
    )
  }

  if (auth === "unauthenticated") {
    return <Navigate to="/login" replace />
  }

  if (allowed && (!role || !allowed.includes(role as Role))) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
