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
import ClassProfesor from './pages/ClassProfesor.jsx'
import PortalDocente from './pages/PortalDocente.jsx'

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
                <Route path="cursos" element={<ClassProfesor />} />
              </Route>

              <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}/>}>
              {/* <Route path="default" element={<OpcionAdmin />} /> */}
              </Route>
            </Routes>
        </AuthProvider>

      </BrowserRouter>
  )
}

export default App
