import { useState } from 'react'
import './assets/css/App.css'
import Login from './pages/Login.jsx'
import ClassAlumno from './pages/ClassAlumno.jsx'
import Chat from './pages/Chat.jsx'
import Calendario from './pages/Calendario.jsx'
import Ayuda from './pages/Ayuda.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cursos" element={<ClassAlumno />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/ayuda" element={<Ayuda />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
