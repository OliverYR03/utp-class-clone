import { useState } from 'react'
import './assets/css/App.css'
import Login from './pages/Login.jsx'
import ClassAlumno from './pages/ClassAlumno.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cursos" element={<ClassAlumno />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
