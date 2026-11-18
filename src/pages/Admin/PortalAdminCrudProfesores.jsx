import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import AdminService from '../../services/AdminService';

function PortalAdminCrudProfesores() {
    const [profesores, setProfesores] = useState([]);
    const [pagina,setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [totalRegistros, setTotalRegistros] = useState(0);
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(true);
    const filas = 20;

    useEffect(() => {
    let activo = true;
    const controller = new AbortController();
    setError("");

    async function cargarProfesores() {
        setCargando(true);
        setError("");

        try {
        const { data } =
            await AdminService.getAllProfesores(pagina, filas);

        if (activo) {
            setProfesores(data.profesores);
            setTotalPaginas(data.totalPaginas);
            setTotalRegistros(data.totalRegistros)
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
    }, [pagina]);


  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
            <table className="w-full table-fixed border-collapse border-spacing-y-4 ">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <tr className="text-left">
                        <th className="p-4 w-[calc(100%-96%)]">N°</th>
                        <th className="p-4 w-[calc(100%-80%)] text-left">Nombres</th>
                        <th className="p-4  w-[calc(100%-86%)]">codigo</th>
                        <th className="p-4 text-left w-[calc(100%-92%)]">dni</th>
                        <th className="p-4 w-[calc(100%-90%)] text-center">rol</th>
                        <th className="p-4 text-center w-[calc(100%-92%)]">sueldo</th>
                        <th className="p-4 px-8 w-[calc(100%-90%)]">estado</th>
                        <th className="p-4 w-[calc(100%-92%)]">Bono</th>
                        <th className='p-4'>Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {profesores.map((profesor, index) => (
                        <tr key={profesor.id_usuario} className="transition-colors hover:bg-emerald-50/40">
                            <td className="px-5 py-4 tabular-nums text-slate-400">{index+ 1}</td>
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <span
                                    aria-hidden="true"
                                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold uppercase text-emerald-700"
                                    >
                                    {profesor.nombres?.charAt(0)}
                                    {profesor.apellidos?.charAt(0)}
                                    </span>

                                    <span className="font-semibold text-slate-800">
                                    {profesor.nombres} {profesor.apellidos}
                                    </span>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-600">{profesor.codigo}</td>
                            <td className="whitespace-nowrap px-5 py-4 font-medium text-slate-600">{profesor.dni}</td>
                            <td className="px-5 py-4">{profesor.rol}</td>
                            <td className="p-4 text-center">{profesor.sueldo}</td>
                            <td className="px-5 py-4">
                                <span
                                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                                    profesor.estado === "ACTIVO"
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "bg-slate-100 text-slate-600"
                                    }`}
                                >
                                    <span
                                    aria-hidden="true"
                                    className="size-1.5 rounded-full bg-current"
                                    />
                                    {profesor.estado}
                                </span>
                            </td>
                            <td className="px-5 py-4 text-slate-600">{profesor.bono}</td>
                            <td className=" py-4">
                                <div className="flex items-center gap-2">
                                    <button
                                    type="button"
                                    aria-label={`Editar a ${profesor.nombres}`}
                                    className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                    Editar
                                    </button>

                                    <button
                                    type="button"
                                    aria-label={`Borrar a ${profesor.nombres}`}
                                    className="rounded-lg px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                                    >
                                    Borrar
                                    </button>
                                </div>
                            </td>
                        </tr>

                    ))}
                    
                </tbody>
            </table>
            <div className="mt-4 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        disabled={cargando || pagina <= 1}
                        onClick={() => setPagina(pagina - 1)}
                        className="rounded-lg border px-4 py-2 disabled:opacity-40"
                    >
                        Anterior
                    </button>

                    <span className="text-sm" aria-live="polite">
                        {totalPaginas > 0 ? `Página ${pagina} de ${totalPaginas}` : "Sin resultados"}
                    </span>

                    <button
                        type="button"
                        disabled={cargando || pagina >= totalPaginas}
                        onClick={() => setPagina(pagina + 1)}
                        className="rounded-lg border px-4 py-2 disabled:opacity-40"
                    >
                        Siguiente
                    </button>
            </div>
        </div>
    </div>
  )
}

export default PortalAdminCrudProfesores