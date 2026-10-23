import { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import '../assets/css/Login.css'
import logo from '../assets/img/logo-pao-class.png'
import fondo from '../assets/img/web-login-pao.svg'


function Login() {
const [showPassword, setShowPassword] = useState(false);

  return (

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="section hidden img bg-[#eaf1fb] lg:flex items-center justify-center ">
              <img src={fondo} alt="jovenes upepinos de psicologia" className="w-[664px] h-[516px] mr-12"/>
              
          </div>

          <div className="section flex items-center justify-center ">
            <div className="flex flex-col justify-center h-full m-auto gap-3 max-w-lg">
              <div className="flex flex-col gap-4">
            <img src={logo} alt="Logo upepino" className="w-[276px] h-auto"/>

            <h1 className="text-2xl mb-4 flex flex-col">
                <span className=" text[#3e4558] font-AdobeBold font-bold">
                  La nueva experiencia digital de aprendizaje
                  </span> 

                  <span className="text-[#3e4558]  font-light">Cercana, dinámica y flexibe wa </span>
                </h1>
              </div>

              <div className="font-LatoRegular">
                <p className="text-[#3e4558] text-sm mb-4">Ingresa con tus datos <span className="font-bold">Iniciar Sesión.</span> </p>

                <form className="w-full font-">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Código UPP</label>

                  <div className="input1 inline-block relative w-full border rounded-lg hover:border-blue-500 text-gray-400  hover:text-blue-500">
                    <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth="1.5" 
                          stroke="currentColor" 
                          className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2   "
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                    <input 
                          type="text" 
                          placeholder="Ingresa tu usuario" 
                          className="w-full px-4 pr-10 py-2  rounded-lg focus:outline-none hover:border-blue-500"
                        />

                        
                </div>

                 <label htmlFor="email" className="flex items-center text-gray-700 text-xs font-normal mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
                       <path strokeLinecap="round" strokeLineJoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg> Ejemplo de usuario: U1533148(no digitar el @upp.edu.pe)</label>
                 
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>

                  <div className="input2 inline-block relative w-full border rounded-lg hover:border-blue-500  text-black hover:text-blue-500">
                  
{showPassword ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-gray-400 w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />

  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                      ) : (

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-gray-400 w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>)}

                        <input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Ingresa tu contraseña" 
                          className="w-full px-4 pr-10 py-2  rounded-lg focus:outline-none hover:border-blue-500"
                        />
                        
                      

                   </div>     
                </div>

                <a href="#" className="flex justify-end text-xs/1 text-blue-500 hover:text-blue-700 font-bold py-2">Restablecer contraseña</a>


                <Link 
                  tabIndex={4} 
                  className="w-full bg-[#0660fc] text-xs h-10 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center text-center" 
                  to="/cursos"
                >
                  Iniciar sesión
                </Link>

              </form>
              </div>
              
            </div>
          </div>
        </div>

  )
}

export default Login