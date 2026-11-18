import { api } from "../api/axios";

const AdminService = {
  /* Profesores */
  getAllProfesores: (
    pagina = 1,
    filas = 20,
    ordenarPor = "apellidos",
    ascendente = true
  ) =>
    api.get("/admin/usuarios/profesores", {
      params: { pagina, filas, ordenarPor, ascendente },
    }),
  updateProfesor: (codigo) => {
    api.put(`/admin/usuarios/profesores/${codigo}/update`)},
    
  newProfesor: (datos) => api.post("/admin/usuarios/profesores/nuevo", datos),

  /* Alumnos */ 
  
  getAllAlumnos: (
  pagina = 1,
  filas = 20,
  ordenarPor = "apellidos",
  ascendente = true
) =>
  api.get("/admin/usuarios/alumnos", {
    params: { pagina, filas, ordenarPor, ascendente },
  }),
  updateAlumno: (codigo, datos) =>
     api.put(`/admin/usuarios/alumnos/${encodeURIComponent(codigo)}/update`, datos),
  
  newAlumno: (datos) => api.post("/admin/usuarios/alumnos/nuevo", datos),

  /* Uusario */ 

  getUsuarioInfo: (codigo) => api.get(`/admin/usuarios/${codigo}/info`),

  deleteUsuario: (codigo) => api.delete(`/admin/usuarios/${codigo}/delete`)


};

export default AdminService;