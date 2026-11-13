import { api } from "../api/axios";

const ProfesorService = {
  getSecciones: () => api.get("/profesor/cursos")
};

export default ProfesorService;