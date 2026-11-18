import { api } from "../api/axios";

const AdminService = {
  /* Profesores */
  getAllProfesores: (pagina = 1, filas = 20) =>
    api.get("/admin/usuarios/profesores", {
      params: { pagina, filas },
    }),

  updateProfesor: (codigo) => {
    api.put(`/admin/usuarios/profesores/${codigo}/update`)},
    /* Alumnos */ 
   getAllAlumnos: (pagina = 1, filas = 20) =>
    api.get("/admin/usuarios/alumnos", {
      params: { pagina, filas },
    }),
     updateAlumno: (codigo, datos) =>
     api.put(`/admin/usuarios/alumnos/${encodeURIComponent(codigo)}/update`, datos),
    
      /* Uusario */ 

    getUsuarioInfo: (codigo) => api.get(`/admin/usuarios/${codigo}/info`),

    deleteUsuario: (codigo) => api.delete(`/admin/usuarios/${codigo}/delete`)


};

export default AdminService;