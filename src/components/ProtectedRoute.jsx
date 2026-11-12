import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { usuario, cargando } = useAuth();
  const location = useLocation();

  if (cargando) return <p>Cargando...</p>;
  return usuario
    ? <Outlet />
    : <Navigate to="/" replace state={{ from: location }} />;
}

