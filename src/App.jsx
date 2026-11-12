import './assets/css/App.css'
import Login from './pages/Login.jsx'
import ClassAlumno from './pages/ClassAlumno.jsx'
import Chat from './pages/Chat.jsx'
import Calendario from './pages/Calendario.jsx'
import Ayuda from './pages/Ayuda.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/student/cursos" element={<ClassAlumno />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/ayuda" element={<Ayuda />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
