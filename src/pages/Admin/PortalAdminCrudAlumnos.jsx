import { useEffect, useState } from 'react'

import AdminService from '../../services/AdminService';
import Swal from "sweetalert2";

function PortalAdminCrudAlumnos() {
    const [orden, setOrden] = useState({
    campo: "nombres",
    ascendente: true,
    });
    const [revisionListado, setRevisionListado] = useState(0);
    const [alumnos, setAlumnos] = useState([]);
    const [pagina,setPagina] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [totalRegistros, setTotalRegistros] = useState(0);
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(true);
    const filas = 20;
    const alerta = Swal.mixin({
        buttonsStyling: false,
        customClass: {
            confirmButton: "mx-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700",
            cancelButton: "mx-1 rounded-lg bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200",
        },
    });
    
    function cambiarOrden(campo) {
    setOrden((actual) => ({
        campo,
        ascendente: actual.campo === campo
        ? !actual.ascendente
        : true,
    }));

    setPagina(1);
    }

    useEffect(() => {
        let activo = true;

        async function cargarAlumnos() {
            setCargando(true);
            setError("");

            try {
            const { data } = await AdminService.getAllAlumnos(
                pagina,
                filas,
                orden.campo,
                orden.ascendente
            );

            if (activo) {
                setAlumnos(data.alumnos);
                setTotalPaginas(data.totalPaginas);
                setTotalRegistros(data.totalRegistros);
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
    }, [pagina, filas, orden.campo, orden.ascendente, revisionListado]);

async function confirmarBorrado(alumno) {
        const { isConfirmed } = await alerta.fire({
            title: "¿Eliminar alumno?",
            text: `Se eliminará a ${alumno.nombres} ${alumno.apellidos}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            focusCancel: true,
        });

        if (!isConfirmed) return;

        try {
            await AdminService.deleteUsuario(alumno.codigo);

            setAlumnos((actuales) =>
            actuales.filter((actual) => actual.codigo !== alumno.codigo)
            );
            setTotalRegistros((total) => total - 1);

            await alerta.fire("Alumno eliminado", "", "success");
        } catch {
            await alerta.fire("No se pudo eliminar al alumno", "", "error");
        }
}

async function editarAlumno(alumno) {
        const { isConfirmed, value: cambios } = await Swal.fire({
            title: "Editar alumno",
            width: 640,
            html: `
            <form class="grid gap-4 text-left sm:grid-cols-2">
                <label class="grid gap-1 text-sm font-medium">
                Nombres
                <input name="nombres" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>

                <label class="grid gap-1 text-sm font-medium">
                Apellidos
                <input name="apellidos" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>
                <label class="grid gap-1 text-sm font-medium">
                    Codigo
                    <input name="codigo" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>
                <label class="grid gap-1 text-sm font-medium">
                    Numero
                    <input name="numero" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>
                <label class="grid gap-1 text-sm font-medium sm:col-span-2">
                Correo
                <input name="correo" type="email" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>

                <label class="grid gap-1 text-sm font-medium">
                Carrera
                <input name="carrera" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>

                <label class="grid gap-1 text-sm font-medium">
                Ciclo
                <input name="ciclo" type="number" min="1" step="1" required
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>

                <label class="grid gap-1 text-sm font-medium">
                Campus
                <input name="campus"
                        class="w-full rounded-lg border border-slate-300 px-3 py-2">
                </label>

                <label class="grid gap-1 text-sm font-medium">
                Modalidad
                <select name="modalidad" required
                        class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2">
                    <option value="">Selecciona una modalidad</option>
                    <option value="PRESENCIAL">Presencial</option>
                    <option value="VIRTUAL">Virtual</option>
                    <option value="SEMIPRESENCIAL">Semipresencial</option>
                </select>
                </label>
            </form>
            `,
            showCancelButton: true,
            confirmButtonText: "Guardar cambios",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#047857",
            focusConfirm: false,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading(),
            allowEscapeKey: () => !Swal.isLoading(),

            didOpen: (popup) => {
            const form = popup.querySelector("form");

            for (const campo of form.elements) {
                campo.value = alumno[campo.name] ?? "";
            }

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                Swal.clickConfirm();
            });

            form.elements.namedItem("nombres").focus();
            },

            preConfirm: async () => {
            const form = Swal.getHtmlContainer().querySelector("form");
            const campos = [...form.elements];

            if (campos.some((campo) => campo.required && !campo.value.trim())
                || !form.checkValidity()) {
                Swal.showValidationMessage("Revisa los campos obligatorios, el correo y el ciclo.");
                return false;
            }

            const datos = Object.fromEntries(
                campos.map((campo) => [campo.name, campo.value.trim()])
            );
            datos.ciclo = Number(datos.ciclo);

            try {
                const respuesta = await AdminService.updateAlumno(alumno.codigo, datos);

                if (respuesta.status < 200 || respuesta.status >= 300) {
                    Swal.showValidationMessage(`No se guardaron los cambios (${respuesta.status}).`);
                    return false;
                }

                return datos;
                } catch (error) {
                const status = error.response?.status;
                Swal.showValidationMessage(
                    status
                    ? `No se guardaron los cambios (${status}).`
                    : "No se pudo conectar con el servidor."
                );
                return false;
                }
            },
        });

        if (!isConfirmed) return;

        setAlumnos((actuales) =>
            actuales.map((actual) =>
            actual.codigo === alumno.codigo ? { ...actual, ...cambios } : actual
            )
        );

        await Swal.fire("Cambios guardados", "", "success");
}

async function agregarAlumno() {
  const campos = [
    { nombre: "nombres", etiqueta: "Nombres", tipo: "text" },
    { nombre: "apellidos", etiqueta: "Apellidos", tipo: "text" },
    { nombre: "dni", etiqueta: "DNI", tipo: "text" },
    { nombre: "correo", etiqueta: "Correo", tipo: "email" },
    { nombre: "codigo", etiqueta: "Codigo", tipo: "text"},
    { numero: "numero", etiqueta: "Numero", tipo:"text"},
    { nombre: "cumpleanos", etiqueta: "Fecha de nacimiento", tipo: "date" },
    { nombre: "ciclo", etiqueta: "Ciclo", tipo: "number" },
    { nombre: "campus", etiqueta: "Campus", tipo: "text" },
  ];

  const estiloCampo = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2";

  const { isConfirmed } = await Swal.fire({
    title: "Nuevo alumno",
    width: 640,
    html: `
      <form class="grid gap-4 text-left sm:grid-cols-2">
        ${campos.map(({ nombre, etiqueta, tipo }) => `
          <label class="grid gap-1 text-sm font-medium">
            ${etiqueta}
            <input
              name="${nombre}"
              type="${tipo}"
              class="${estiloCampo}"
              ${nombre === "campus" ? "" : "required"}
              ${nombre === "ciclo" ? 'min="1" step="1"' : ""}
            >
          </label>
        `).join("")}
        <label class="grid gap-1 text-sm font-medium">
          Carrera
          <select name="carrera" class="${estiloCampo}" required>
            <option value="">Selecciona una carrera</option>
            <option value="INGENIERIA_SOFTWARE">Ingenieria de Software</option>
            <option value="INGENIERIA_CHISTEMAS">Ingenieria de Sistemas</option>
            <option value="PSICOLOGIA">Psicologia</option>
            <option value="ZAPATERO_NUCLEAR">Zapateria Nuclear</option>
          </select>
        </label>

        <label class="grid gap-1 text-sm font-medium">
        Modalidad
        <select name="modalidad" class="${estiloCampo}" required>
            <option value="">Selecciona una modalidad</option>
            <option value="PRESENCIAL">Presencial</option>
            <option value="VIRTUAL">Virtual</option>
            <option value="SEMIPRESENCIAL">Semipresencial</option>
        </select>
        </label>
      </form>
    `,
    showCancelButton: true,
    confirmButtonText: "Registrar alumno",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#047857",
    focusConfirm: false,
    showLoaderOnConfirm: true,
    allowOutsideClick: () => !Swal.isLoading(),
    allowEscapeKey: () => !Swal.isLoading(),

    didOpen: (popup) => {
      const form = popup.querySelector("form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!Swal.isLoading()) Swal.clickConfirm();
      });
      form.elements.namedItem("nombres").focus();
    },

    preConfirm: async () => {
      const form = Swal.getHtmlContainer().querySelector("form");

      for (const campo of form.elements) {
        campo.value = campo.value.trim();
      }

      if (!form.reportValidity()) return false;

      const datos = Object.fromEntries(new FormData(form));
      datos.ciclo = Number(datos.ciclo);

      try {
        const respuesta = await AdminService.newAlumno(datos);

        if (!(respuesta?.status >= 200 && respuesta.status < 300)) {
          Swal.showValidationMessage("El servidor no confirmó el registro.");
          return false;
        }

        return true;
      } catch (error) {
        const status = error.response?.status;
        Swal.showValidationMessage(
          status
            ? `No se pudo registrar al alumno (HTTP ${status}).`
            : "No se pudo conectar con el servidor."
        );
        return false;
      }
    },
  });

  if (!isConfirmed) return;

  setPagina(1);
  setRevisionListado((actual) => actual + 1);
  await Swal.fire("Alumno registrado", "", "success");
}
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
            <div className="flex flex-col-reverse gap-2 ">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    {totalRegistros} registros
                </span>
                <button onClick={agregarAlumno}  className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
                    AGREGAR
                </button>
            </div>
            
        </div>

        <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                    <tr>
                        <th scope="col" className="px-5 py-4">
                        N°
                        </th>

                        {[
                        { campo: "nombres", etiqueta: "Nombres" },
                        { campo: "codigo", etiqueta: "Código" },
                        { campo: "dni", etiqueta: "DNI" },
                        ].map(({ campo, etiqueta }) => (
                        <th
                            key={campo}
                            scope="col"
                            className="px-5 py-4"
                            aria-sort={
                            orden.campo === campo
                                ? orden.ascendente
                                ? "ascending"
                                : "descending"
                                : "none"
                            }
                        >
                            <button
                            type="button"
                            onClick={() => cambiarOrden(campo)}
                            className={`inline-flex items-center gap-2 rounded transition-colors hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 ${
                                orden.campo === campo ? "text-emerald-700" : ""
                            }`}
                            >
                            {etiqueta}

                            <span aria-hidden="true">
                                {orden.campo === campo
                                ? orden.ascendente ? "↑" : "↓"
                                : "↕"}
                            </span>
                            </button>
                        </th>
                        ))}

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
                        key={alumno.codigo}
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
                            onClick={() => editarAlumno(alumno)}
                            aria-label={`Editar a ${alumno.nombres}`}
                            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                            >
                            Editar
                            </button>

                            <button
                            type="button"
                            onClick={() => confirmarBorrado(alumno)}
                            aria-label={`Borrar a ${alumno.nombres}`}
                            className="rounded-lg px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
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

export default PortalAdminCrudAlumnos