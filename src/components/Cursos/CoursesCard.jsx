import React from 'react'
import fondo from '../../assets/img/CardCursos/defaultbackground.png';

function CoursesCard({nombre, seccion, modalidad, docente}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-white h-[328px] flex flex-col justify-start">
            <div className="">
                <img src={fondo} alt="Fondo del curso"  className="object-cover w-full"/>
            <div className="w-full ">
                <div className="border border-b-[5px] border-orange-700 rounded"/>
                <span className="relative bg-orange-700 rounded text-white text-xs p-0.5 px-1">38%</span>
            </div>
            </div>
            <div className="px-8 my-4">
                <h2 className="font-bold">{nombre}</h2>
                <p className="text-sm"> {seccion} - {modalidad} </p>
            </div>
            <div className="lg:flex items-center gap-2 hidden px-8 pb-4">
                <img src="https://class.utp.edu.pe/static/media/student.42525dea.svg" alt="Foto de perfil" className="h-6 w-auto rounded-full" />
                <p className="text-sm">{docente}</p>
            </div>
        </div>
    </div>
  )
}

export default CoursesCard