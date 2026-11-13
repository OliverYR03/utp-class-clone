import CardOption from "./cardOption"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectOption() {
    {/*const { usuario} = useAuth();*/}
 const [seleccionado, setSeleccionado] = useState(false);
const navigate = useNavigate();
 const confirmar = () => {
  const destinos = {
    Docente: "/teacher/portal",
    Estudiante: "/teacher/cursos",
  };

  const destino = destinos[seleccionado];

  if (destino) {
    navigate(destino);
  }
};
    return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-20">
        <div className="">
            
            <p className="text-2xl text-center ">!Hola , <span className="font-bold"></span>Usuario </p>
            <p className="text-2xl text-center ">Con qué rol deseas ingresar</p>
        </div>
        <div id="role-select"className="flex flex-row gap-40 items-center justify-center ">
            <label className="block cursor-pointer">
                <input
                    type="radio"
                    name="rol"
                    value="Docente"
                    checked={seleccionado === "Docente"}
                    onChange={(e) => setSeleccionado(e.target.value)}
                    className="peer sr-only"
                />

                <CardOption role="Docente" />
                </label>
            <label className="block cursor-pointer">
            <input
            type="radio"
            name="rol"
            value="Estudiante"
            checked={seleccionado === "Estudiante"}
            onChange={(e) => setSeleccionado(e.target.value)}
            className="peer sr-only"
            />

            <CardOption role="Estudiante" />
            </label>
            
        </div>
        <div className="">
            <button
            type="button"
            onClick={confirmar}
            disabled={!seleccionado}
            className="
                rounded-md bg-blue-500 px-4 py-2 text-white
                transition-colors hover:bg-blue-600
                disabled:cursor-not-allowed disabled:opacity-50
            "
            >
            Confirmar
            </button>
        </div>
    </div>
  )
}

export default SelectOption