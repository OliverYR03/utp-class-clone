import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeccionService from "../../services/SeccionService";

function CursoSeccion() {
    const { idSeccion } = useParams();
    const [alumnos, setAlumnos] = useState([]);
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    let activo = true;

    async function cargarAlumnos() {
        setCargando(true);
        setError("");

        try {
        const { data } =
            await SeccionService.getAlumnosFromSeccion(idSeccion);

        if (activo) {
            setAlumnos(data);
        }
        } catch {
        if (activo) {
            setError("No se pudo obtener los alumnos.");
        }
        } finally {
        if (activo) {
            setCargando(false);
        }
        }
    }

    cargarAlumnos();

    return () => {
        activo = false;
    };
    }, [idSeccion]);


  return (
    <div>
        <div className="">
            <table className="w-full table-fixed border-collapse border-spacing-y-4 ">
                <thead>
                    <tr className="text-left">
                        <th className="p-4 w-[calc(100%-96%)]">N°</th>
                        <th className="p-4 w-[calc(100%-80%)] text-left">Nombres</th>
                        <th className="p-4  w-[calc(100%-86%)]">codigo</th>
                        <th className="p-4 text-left w-[calc(100%-92%)]">dni</th>
                        <th className="p-4 w-[calc(100%-80%)] text-center">correo</th>
                        <th className="p-4 text-center w-[calc(100%-92%)]">ciclo</th>
                        <th className="p-4 w-[calc(100%-92%)]">Estado</th>
                        <th className="p-4 ">Carrera</th>
                    </tr>

                </thead>
                <tbody className="">
                    {alumnos.map((alumno, index) => (
                        <tr key={alumno.id_usuario} className="mt-4 border-2 border-green-300 ">
                            <td className="text-center">{index+ 1}</td>
                            <td className="p-4 text-left ">{alumno.nombres} {alumno.apellidos}</td>
                            <td>{alumno.codigo}</td>
                            <td>{alumno.dni}</td>
                            <td className="pl-10">{alumno.correo}</td>
                            <td className="p-4 text-center">{alumno.ciclo}</td>
                            <td>{alumno.estado}</td>
                            <td>{alumno.carrera}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CursoSeccion