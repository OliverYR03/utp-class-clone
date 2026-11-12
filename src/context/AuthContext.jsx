import { createContext, useContext, useEffect, useState } from "react";
import { setOnUnauthorized, tokenStorage } from "../api/axios";
import AuthService from "../services/AuthService";
import AlumnoService from "../services/AlumnoService";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  const cargarPerfil = async () => {
  try {
    await UsuarioService.getPerfil();

    setUsuario(respuesta.data);
    return respuesta.data;
  } catch {
    setUsuario(null);
    return null;
  }
};

  useEffect(() => {
    setOnUnauthorized(() => setUsuario(null));
    if (tokenStorage.get()) {
      cargarPerfil().finally(() => setCargando(false));
    } else {
      setCargando(false);
    }
  }, []);

  const login = async (codigo, password) => {
  await AuthService.login(codigo, password);

  const perfil = await cargarPerfil();

  if (!perfil) {
    AuthService.logout();
    throw new Error("SIN_ACCESO");
  }

  return perfil;
};

  const logout = () => {
    AuthService.logout();
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, cargando, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};