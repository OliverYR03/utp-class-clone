import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ allowedRoles }) {
  const { usuario, cargando } = useAuth();

  if (cargando) return <p>Cargando...</p>;

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(usuario.rol)) {
    return <Navigate to="/sin-acceso" replace />;
  }

  return <Outlet />;
}
