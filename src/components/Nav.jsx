import { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from '../assets/img/logo-pao-class.png'

function Nav() {
  const { usuario} = useAuth();
  const navigate = useNavigate();
    const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("isOpen") !== "false";

  });
  return (
    <nav className="sticky top-0 z-50 h-14 w-full bg-white lg:ml-[88px] lg:w-[calc(100%-88px)]">
    <div className="flex h-full w-full items-center justify-between pr-5 text-black">
      <div className="flex h-full items-center">
        <button
          type="button"
          aria-label="Abrir menú"
          className=" lg:hidden  flex h-full w-14 shrink-0 items-center justify-center bg-aside-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <Link to="/student" className="flex items-center px-6">
          <img
            src={logo}
            alt="Logo"
            className="h-6 w-auto"
          />
        </Link>
      </div>
          

          <div className="flex items-center gap-4 ">
            <div className="px-md relative flex items-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </div>

            <div className="hidden lg:flex flex-row items-center lg:gap-2 lg:px-md">
            <div className="h-9 w-[1px] bg-black" />

            <div className="flex flex-col pl-lg pr-sm  mr-4">
              <div className="flex flex-row ">
                <span className="text-sm ">Hola, &nbsp;</span>

                <span className="text-sm font-semibold">{usuario?.nombres}</span>
              </div>

              <div className="flex flex-row-reverse ">
                <span className="text-xs font-normal text-[#4f6168]">{usuario?.rol}</span>
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

                    <button type="button" className="text-sm font-normal text-[#4f6168] cursor-pointer" onClick={handleLogout}>
                      Cerrar sesión
                    </button>
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