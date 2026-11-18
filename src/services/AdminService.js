import { api } from "../api/axios";

const AdminService = {
  /* Profesores */
  getAllProfesores: (
    pagina = 1,
    filas = 20,
    ordenarPor = "apellidos",
    ascendente = true,
    texto = ""
  ) =>
    api.get("/admin/usuarios/profesores", {
      params: { pagina, filas, ordenarPor, ascendente,texto },
    }),
updateProfesor: (codigo, datos) =>
  api.put(`/admin/usuarios/profesores/${encodeURIComponent(codigo)}/update`, datos),
    
  newProfesor: (datos) => api.post("/admin/usuarios/profesores/nuevo", datos),

  /* Alumnos */ 
  
  getAllAlumnos: (
  pagina = 1,
  filas = 20,
  ordenarPor = "apellidos",
  ascendente = true,
  texto = ""
) =>
  api.get("/admin/usuarios/alumnos", {
    params: { pagina, filas, ordenarPor, ascendente, texto },
  }),
  updateAlumno: (codigo, datos) =>
     api.put(`/admin/usuarios/alumnos/${encodeURIComponent(codigo)}/update`, datos),
  
  newAlumno: (datos) => api.post("/admin/usuarios/alumnos/nuevo", datos),

  /* Uusario */ 

  getUsuarioInfo: (codigo) => api.get(`/admin/usuarios/${codigo}/info`),

  deleteUsuario: (codigo) => api.delete(`/admin/usuarios/${codigo}/delete`)


};

export default AdminService;