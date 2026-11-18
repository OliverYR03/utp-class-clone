import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import AdminService from '../../services/AdminService';

function PortalAdminCrudProfesores() {
    const { idUsuario } = useParams();
    const [profesores, setProfesores] = useState([]);
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
    let activo = true;

    async function cargarProfesores() {
        setCargando(true);
        setError("");

        try {
        const { data } =
            await AdminService.getAllProfesores();

        if (activo) {
            setProfesores(data);
        }
        } catch {
        if (activo) {
            setError("No se pudo obtener los profesores.");
        }
        } finally {
        if (activo) {
            setCargando(false);
        }
        }
    }

    cargarProfesores();

    return () => {
        activo = false;
    };
    }, []);


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
                        <th className="p-4 w-[calc(100%-80%)] text-center">rol</th>
                        <th className="p-4 text-center w-[calc(100%-92%)]">sueldo</th>
                        <th className="p-4 w-[calc(100%-92%)]">estado</th>
                        <th className="p-4 ">Bono</th>
                    </tr>

                </thead>
                <tbody className="">
                    {profesores.map((profesor, index) => (
                        <tr key={profesor.id_usuario} className="mt-4 border-2 border-green-300 ">
                            <td className="text-center">{index+ 1}</td>
                            <td className="p-4 text-left ">{profesor.nombres} {profesor.apellidos}</td>
                            <td>{profesor.codigo}</td>
                            <td>{profesor.dni}</td>
                            <td className="pl-10">{profesor.rol}</td>
                            <td className="p-4 text-center">{profesor.sueldo}</td>
                            <td>{profesor.estado}</td>
                            <td>{profesor.bono}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PortalAdminCrudProfesores