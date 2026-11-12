import {useState, useEffect} from 'react'
import { useAuth } from "../context/AuthContext";
import Aside from '../components/Aside'
import Carrousel from '../components/Carrousel'
import Nav from '../components/Nav'
import ActividadSemanal from '../components/ActividadSemanal'
import CoursesCard from '../components/Cursos/CoursesCard'
import AlumnoService from '../services/AlumnoService'


function ClassAlumno() {
  const [periodoIsOpen, setPeriodoIsOpen] = useState(false);
  const [matriculas, setMatriculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  let activo = true;

  async function cargarMatriculas() {
    try {
      const { data } = await AlumnoService.getMatriculasEnCurso();

      if (activo) {
        setMatriculas(data);
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

  cargarMatriculas();

  return () => {
    activo = false;
  };
}, []);
  
  const slides = [
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/613839b8-aa13-4fc0-b6a9-27775adf70fb/class-desktop-2%20(1)_JVYFCV.jpg",
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/1c8f9c38-c5cd-43a2-8869-ee5cec6f633d/class-desktop-2%20(2)_PVGKRP.jpg",
"https://utp-prd-upload-file-storage.s3.amazonaws.com/pao/content/edbc1a5a-bc18-49d0-bd5f-db52f9abc6cf/class-desktop-2_BVIUTM.jpg"

  ];  return (
    <div className="min-h-screen bg-back-class">
    <Aside />

    <div className="min-w-0 lg:ml-[88px]">
      <Nav />

      <main className="mx-auto w-full max-w-[1328px] px-5 pb-8 pt-3">
        <Carrousel slides={slides} />

        <div className="mt-7 grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="order-1 min-w-0 xl:order-2">
            <ActividadSemanal />
          </div>

          <section className="order-2 min-w-0 xl:order-1">
              <div className="flex flex-wrap items-center justify-between gap-4 py-4">
                <h1 className="text-sm font-bold">Mis cursos</h1>

                <div className="relative w-full sm:w-[282px]">
                  <p className="mb-1 text-sm">Filtrar por período</p>

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
                    <ul className="absolute left-0 right-0 z-20 mt-1 rounded bg-white py-2 shadow-lg">
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
              </div>

              <h2 className="mb-6 mt-10 border-b border-slate-900 pb-4 text-sm font-bold">
                2026 - Ciclo 2 Agosto PREG (001) (Actual)
              </h2>


                {cargando ? (
                  <p>Cargando cursos...</p>
                ) : error ? (
                  <p role="alert">{error}</p>
                ) : matriculas.length === 0 ? (
                  <p>No tienes matrículas en curso.</p>
                ) : (
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {matriculas.map((matricula) => (
                      <CoursesCard
                        key={matricula.id}
                        nombre={matricula.seccion.curso.nombre}
                        seccion={matricula.seccion.numero}
                        modalidad={"Presencial"}
                        docente={matricula.seccion.profesor.nombres + " " + matricula.seccion.profesor.apellidos}
                      />
                    ))}
                  </div>
                )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );

 
}
 export default ClassAlumno;