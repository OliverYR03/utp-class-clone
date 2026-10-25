import {useState} from 'react'

import Aside from '../components/Aside'
import Carrousel from '../components/Carrousel'
import Nav from '../components/Nav'
import ActividadSemanal from '../components/ActividadSemanal'

function ClassAlumno() {

  const slides = [
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/613839b8-aa13-4fc0-b6a9-27775adf70fb/class-desktop-2%20(1)_JVYFCV.jpg",
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/1c8f9c38-c5cd-43a2-8869-ee5cec6f633d/class-desktop-2%20(2)_PVGKRP.jpg",
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/edbc1a5a-bc18-49d0-bd5f-db52f9abc6cf/class-desktop-2_BVIUTM.jpg"

  ];

  const [periodoIsOpen, setPeriodoIsOpen] = useState("False");

  return (
    <div className="relative flex  w-screen bg-back-class h-screen">

        <Nav />

       <div className="flex justify-center  w-full max-w-[1288px] mx-auto">
          <div className="">
            <Aside />

          </div>

         <div className="w-full flex mt-24 h-full">
           <div className=" w-full h-full">
              <div className="flex flex-col items-center gap-10">
                <div className="">
                  <Carrousel slides={slides}/>
                </div>

               <div className="w-full grid grid-cols-3 gap-10">
                 <div className="col-span-2">
                  <div className="nav ">
                      <nav className="flex flex-row justify-between items-center w-full p-7"> 
                            <div >
                              <p>Mis Cursos</p>
                            </div>

                            <div >
                              <p>Filtrar por Periodo</p>

                              <div className="bg-white border flex justify-between items-center gap-4 p-1 px-4 rounded-md  cursor-pointer" onClick={() => setPeriodoIsOpen(!periodoIsOpen)}>
                                  <p>Periodo actual</p>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                              </div>

                              <ul className={`${periodoIsOpen ? "hidden" : "flex"} shadow absolute flex-col bg-white h-[208px] justify-center mt-1`}>
                                <li className="hover:bg-slate-500 p-2 ">Periodo Actual</li>

                                <li className="hover:bg-slate-500 p-2 ">Todos los periodos</li>

                                <li className="hover:bg-slate-500 p-2 ">2026 - Ciclo 2 Agosto PREG (001) <br/> (Actual) </li>

                                <li className="hover:bg-slate-500 p-2 ">2026 - Ciclo 1 Marzo PREG (001)</li>
                              </ul>
                            </div>
                      </nav>
                  </div>
                  <div className="cursos">
                    ClassAlumno 
                  </div>
                 </div>
                 <div className="flex items-center col-span-1">
                  <ActividadSemanal />
                 </div>
                </div>
               </div>
              </div>
              
           </div>

           
        </div>
            
    </div>
  )
}

export default ClassAlumno