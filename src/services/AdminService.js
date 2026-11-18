import { api } from "../api/axios";

const AdminService = {
  getAllProfesores: () => api.get("/admin/usuarios/profesores"),
  getAllAlumnos: () => api.get("/admin/usuarios/alumnos"),
  getUsuarioInfo: (idUsuario) => api.get(`/admin/usuarios/${idUsuario}/info`)
};

export default AdminService;