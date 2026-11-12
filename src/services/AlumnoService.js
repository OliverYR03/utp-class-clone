import { api } from "../api/axios";

const AlumnoService = {
  getPerfil: () => api.get("/student/me"),
  getMatriculasEnCurso: () => api.get("/student/encurso"),
};

export default AlumnoService;