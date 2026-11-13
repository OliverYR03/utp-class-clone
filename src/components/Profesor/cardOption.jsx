import studentImg from "../../assets/img/CardOption/estudiante.png";
import profesorImg from "../../assets/img/CardOption/docente.png";
import adminImg from "../../assets/img/CardOption/soporte.png";

const options = {
  Estudiante: studentImg,
  Docente: profesorImg,
  Admin: adminImg,
};

function CardOption({ role }) {
  return (
    <div
      className="
        flex h-[350px] w-[350px] flex-col items-center justify-center
        rounded-full border-2 border-black transition
        peer-checked:border-blue-600 peer-checked:bg-blue-50
        peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600
        peer-focus-visible:ring-offset-2
      "
    >
      <img
        src={options[role]}
        alt=""
        className="h-[240px] w-[240px] object-contain"
      />
      <span className="text-2xl font-bold">{role}</span>
    </div>
  );
}

export default CardOption;