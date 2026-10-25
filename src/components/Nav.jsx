import { useState } from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/img/logo-pao-class.png'

function Nav() {
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("isOpen") !== "false";

  });
  return (
    <nav className="t-0 left-[88px] right-0 absolute flex items-center bg-[#f5f5f5] h-[72px] z-10 ">
     <div className="p-4 flex items-center justify-between text-black pr-16 w-full">
        <a className="px-6">
                <img src={logo} alt="Logo upepino" className="h-6 max-h-[3.2rem]" />
        </a>

        <div className="flex items-center gap-4">
          <div className="px-md relative flex items-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </div>

           <div className="flex flex-row items-center gap-2 px-md">
           <div className="h-9 w-[1px] bg-black" />

          <div className="flex flex-col pl-lg pr-sm  mr-4">
            <div className="flex flex-row ">
              <span className="text-sm ">Hola, &nbsp;</span>

              <span className="text-sm font-semibold">Upepino</span>
            </div>

            <div className="flex flex-row-reverse ">
              <span className="text-xs font-normal text-[#4f6168]">Estudiante</span>
            </div>
          </div>

          <div className="flex ">
            <img src="https://class.utp.edu.pe/static/media/student.42525dea.svg" alt="Foto de perfil" className="h-14 w-10 rounded-full" />
          </div>

          <div className="">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg> 

            ) : (
              <div className="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /> 
              </svg>

                <div className="absolute  mt-2 w-[232px] h-[61px] bg-white border shadow z-10 top-16 right-10 p-[1.2rem]">
                  <div className="flex gap-2 items-center hover:bg-slate-400 h-100%">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>

                  <Link to="/" className="text-sm font-normal text-[#4f6168] cursor-pointer">Cerrar sesión</Link>
                  </div>
                </div>
              </div>
                
              
            )}
          </div>
        </div>
      </div>
     </div>
      
    </nav>
  )
}

export default Nav