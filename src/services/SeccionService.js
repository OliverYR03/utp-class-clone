import { api } from "../api/axios";

const SeccionService = {
  getAlumnosFromSeccion: (idSeccion) => api.get(`/profesor/cursos/${idSeccion}/alumnos`),
};

export default SeccionService;