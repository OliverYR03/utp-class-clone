import { api } from "../api/axios";

const UsuarioService = {
  getPerfil: () => api.get("/api/usuarios/perfil")
};

export default UsuarioService;