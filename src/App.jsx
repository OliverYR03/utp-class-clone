import './assets/css/App.css'
import Login from './pages/Login.jsx'
import ClassAlumno from './pages/ClassAlumno.jsx'
import Chat from './pages/Chat.jsx'
import Calendario from './pages/Calendario.jsx'
import Ayuda from './pages/Ayuda.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Profesor/Home.jsx'
import ClassProfesor from './pages/Profesor/ClassProfesor.jsx'
import PortalDocente from './pages/PortalDocente.jsx'
import ClassProfesorLayout from './pages/Profesor/ClassProfesorLayout.jsx'
import CursoSeccion from './pages/Seccion/CursoSeccion.jsx'
import PortalAdmin from './pages/Admin/PortalAdmin.jsx'
import PortalAdminLayout from './pages/Admin/PortalAdminLayout.jsx'
import PortalAdminCrudProfesores from './pages/Admin/PortalAdminCrudProfesores.jsx'
import PortalAdminCrudAlumnos from './pages/Admin/PortalAdminCrudAlumnos.jsx'


function App() {
  
  return (

      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/student" element={<ProtectedRoute allowedRoles={["ESTUDIANTE"]} />}>
                <Route path="cursos" element={<ClassAlumno />} />
                <Route path="chat" element={<Chat />} />
                <Route path="calendario" element={<Calendario />} />
                <Route path="ayuda" element={<Ayuda />} />
              </Route>
        
              <Route path="/teacher"  element={<ProtectedRoute allowedRoles={["PROFESOR"]}/>}>
                <Route index element={<Home />} />
                <Route path="portal" element={<PortalDocente />}  />

                <Route element={<ClassProfesorLayout />}>
                  <Route path="cursos" element={<ClassProfesor />} />
                  <Route path="seccion/:idSeccion" element={<CursoSeccion />} />
                </Route>
              </Route>

              <Route path="/admin" element={<ProtectedRoute allowedRoles={['ADMIN']}/>}>
                <Route element={<PortalAdminLayout />}>
                  <Route index element={<PortalAdmin />} />
                  <Route path="profesores" element={<PortalAdminCrudProfesores /> } />
                  <Route path="alumnos" element={<PortalAdminCrudAlumnos /> } />
                </Route>
              </Route>
            </Routes>
        </AuthProvider>

      </BrowserRouter>
  )
}

export default App
