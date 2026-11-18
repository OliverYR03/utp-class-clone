import { useEffect, useState } from 'react'

import AdminService from '../../services/AdminService';

function PortalAdminCrudAlumnos() {
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
            await AdminService.getAllAlumnos();

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
    }, []);


  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
            <h2 className="text-lg font-bold text-slate-800">
                Alumnos
            </h2>
            <p className="mt-1 text-sm text-slate-500">
                Listado de estudiantes registrados
            </p>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            {alumnos.length} registros
            </span>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                <th scope="col" className="px-5 py-4">N°</th>
                <th scope="col" className="px-5 py-4">Nombres</th>
                <th scope="col" className="px-5 py-4">Código</th>
                <th scope="col" className="px-5 py-4">DNI</th>
                <th scope="col" className="px-5 py-4">Correo</th>
                <th scope="col" className="px-5 py-4">Estado</th>
                <th scope="col" className="px-5 py-4">Carrera</th>
                <th scope="col" className="px-5 py-4 text-right">
                    Acciones
                </th>
                </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
                {alumnos.map((alumno, index) => (
                <tr
                    key={alumno.id_usuario}
                    className="transition-colors hover:bg-emerald-50/40"
                >
                    <td className="px-5 py-4 tabular-nums text-slate-400">
                    {index + 1}
                    </td>

                    <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                        <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold uppercase text-emerald-700"
                        >
                        {alumno.nombres?.charAt(0)}
                        {alumno.apellidos?.charAt(0)}
                        </span>

                        <span className="font-semibold text-slate-800">
                        {alumno.nombres} {alumno.apellidos}
                        </span>
                    </div>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-600">
                    {alumno.codigo}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 tabular-nums text-slate-500">
                    {alumno.dni}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                    {alumno.correo}
                    </td>

                    <td className="px-5 py-4">
                    <span
                        className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                        alumno.estado === "ACTIVO"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                    >
                        <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-current"
                        />
                        {alumno.estado}
                    </span>
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                    {alumno.carrera?.replaceAll("_", " ")}
                    </td>

                    <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                        <button
                        type="button"
                        aria-label={`Editar a ${alumno.nombres}`}
                        className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
                        >
                        Editar
                        </button>

                        <button
                        type="button"
                        aria-label={`Borrar a ${alumno.nombres}`}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
                        >
                        Borrar
                        </button>
                    </div>
                    </td>
                </tr>
                ))}

                {alumnos.length === 0 && (
                <tr>
                    <td colSpan={8} className="px-6 py-14 text-center text-slate-400">
                    No hay alumnos registrados.
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
  )
}

export default PortalAdminCrudAlumnos