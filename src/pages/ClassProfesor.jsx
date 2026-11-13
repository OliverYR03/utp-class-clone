import {useState, useEffect} from 'react'
import ProfesorService from '../services/ProfesorService.js'
import Nav from "../components/Nav.jsx";
import Aside from "../components/Aside.jsx";

function ClassProfesor() {
        const [periodoIsOpen, setPeriodoIsOpen] = useState(false);
        const [secciones, setSecciones] = useState([]);
        const [cargando, setCargando] = useState(true);
     useEffect(() => {
        let activo = true;
        
            async function cargarSecciones() {
            try {
            const { data } = await ProfesorService.getSecciones();

            if (activo) {
                setSecciones(data);
            }
            } catch {
            if (activo) {
                setError("No se pudieron cargar tus cursos.");
            }
            } finally {
            if (activo) {
                setCargando(false);
            }
            }
        }

        cargarSecciones();

        return () => {
            activo = false;
        }
        }, []);
    
  return (
    <div className="min-h-screen bg-back-class">
        <Aside/>
        <div className="">
            <Nav />
            <main className="mx-auto w-full max-w-[1328px] px-5 pb-8 pt-3">
                <nav className="w-full flex flex-row justify-between mt-10">
                    <p>Mis cursos</p>
                    <div className="relative w-full lg:w-[342px] flex-row flex" >
                        <p className="mb-1 text-sm">Filtrar por </p>

                        <button
                            type="button"
                            onClick={() => setPeriodoIsOpen(!periodoIsOpen)}
                            aria-expanded={periodoIsOpen}
                            className="flex w-full items-center justify-between rounded border border-gray-400 bg-white px-4 py-3 text-sm"
                        >
                            Periodo actual
                            <span aria-hidden="true">⌄</span>
                        </button>

                        {periodoIsOpen && (
                            <ul className="absolute left-0 right-0 z-20 mt-12 rounded bg-white py-2 shadow-lg">
                            {[
                                "Periodo actual",
                                "Todos los periodos",
                                "2026 - Ciclo 2 Agosto PREG (001) (Actual)",
                                "2026 - Ciclo 1 Marzo PREG (001)",
                            ].map((periodo) => (
                                <li key={periodo}>
                                <button
                                    type="button"
                                    onClick={() => setPeriodoIsOpen(false)}
                                    className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
                                >
                                    {periodo}
                                </button>
                                </li>
                            ))}
                            </ul>
                        )}
                    </div>
                </nav>
                <div className="">
                    <table className="w-full table-fixed border-separate border-spacing-y-4">
  <thead>
    <tr>
      <th className="w-2/5 p-4 text-left">Curso</th>
      <th className="p-4 text-left">Sección</th>
      <th className="p-4 text-left">Turno</th>
      <th className="p-4 text-left">Periodo</th>
      <th className="p-4 text-right">
        <span className="sr-only">Acciones</span>
      </th>
    </tr>
  </thead>

    <tbody>
        {secciones.map((seccion) => (
        <tr key={seccion.id_seccion} className="bg-white ">
            <td className={`rounded-lg p-4 border-l-4 
                ${
                    seccion.curso.modalidad === "PRESENCIAL"
                        ? "border-l-green-500 "
                        : "border-l-purple-500 "
                    }
                  `}>
            <div className="flex flex-col gap-2">
                <p className="font-bold uppercase">{seccion.curso.nombre}</p>

                <div className="flex items-center gap-2">
                <span
                    className={`rounded border px-2 ${
                    seccion.curso.modalidad === "PRESENCIAL"
                        ? "border-green-500 text-green-500"
                        : "border-purple-500 text-purple-500"
                    }`}
                >
                    {seccion.curso.modalidad}
                </span>

                <span>{seccion.curso.nivel}</span>
                </div>
            </div>
            </td>

            <td className="p-4">{seccion.numero}</td>
            <td className="p-4">{seccion.turno}</td>
            <td className="p-4">{seccion.periodo}</td>

           <td className={`rounded-lg p-4 border-r-2 
                ${
                    seccion.curso.modalidad === "PRESENCIAL"
                        ? "border-r-green-500 "
                        : "border-r-purple-500 "
                    }
                  `}>
            <button className="text-blue-600 font-bold">Ver curso →</button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
                </div>
            </main>
        </div>
    </div>
  )
}

export default ClassProfesor