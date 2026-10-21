import React from 'react'
import './assets/css/login.css'
import logo from './assets/img/logo-pao-class.png'
import fondo from './assets/img/web-login-pao.svg'

function Login() {
  return (
        <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          <div class="section img bg-[#eaf1fb] flex items-center justify-center ">
              <img src={fondo} alt="jovenes upepinos de psicologia" class="w-[664px] h-[516px]"/>
              
          </div>
          <div class="section flex items-center justify-center">
            <div class="flex flex-col items-center justify-center h-full m-auto">
            <img src={logo} alt="Logo upepino" class="w-[276px] h-auto"/>
              
              <div className="m-2 px-5 py-6">
              
              <h1 class="text-3xl mb-4">
                <span class=" text-gray-600 font-AdobeBold">
                  La nueva experiencia digital de aprendizaje
                  </span> 
                  <span class="text-blue-500 font-AdobeRegular">Cercana, dinámica y flexibe wa </span>
                </h1>
              <form class="w-full max-w-sm">
                <div class="mb-4">
                  <input type="email" placeholder="Correo electrónico" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div class="mb-6">
                  <input type="password" placeholder="Contraseña" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Iniciar sesión</button>
              </form>
              </div>
            </div>
          </div>
        </div>

  )
}

export default Login