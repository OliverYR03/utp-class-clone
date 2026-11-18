import {
  Menu,
  Home,
  BookOpen,
  CalendarDays,
  Clipboard,
  Aperture,
  CircleHelp,
  ChevronRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
const opciones = [
  { label: "Inicio", href: "/admin", icon: Home },
  { label: "Alumnos", href: "/admin/alumnos", icon: BookOpen },
  { label: "Profesores", href: "/admin/profesores", icon: CalendarDays },
];

export default function SidebarDocente({ onMenuClick }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function renderOpcion({ label, href, icon: Icon }) {
    const activo = pathname === href;

    return (
      <button
        key={href}
        type="button"
        onClick={() => navigate(href)}
        aria-current={activo ? "page" : undefined}
        className={[
          "group relative flex w-full items-center gap-4 text-left",
          "py-6 pl-11 pr-7 text-[18px]",
          "transition-colors focus-visible:outline",
          "focus-visible:outline-2 focus-visible:outline-emerald-500",
          activo
            ? " w-[calc(100%-26px)] rounded-l-2xl bg-[#f6faf9] pl-[18px] font-bold text-[#1b1b1b]"
            : "border-b border-white/10 text-[#d2d2d2] hover:bg-white/5",
        ].join(" ")}
      >
        <span
          className={[
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            activo ? "bg-[#1b1b1b] text-white" : "bg-white text-[#1b1b1b]",
          ].join(" ")}
        >
          <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="flex-1">{label}</span>
        <ChevronRight size={23} strokeWidth={2} aria-hidden="true" />
      </button>
    );
  }


  return (
    <aside className="flex min-h-screen w-[314px] shrink-0 flex-col bg-[#1b1b1b]">
      <header className="flex h-[123px] shrink-0 items-center gap-4 px-11">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Alternar menú"
          className="rounded p-1 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <Menu size={28} aria-hidden="true" />
        </button>

        <span className="whitespace-nowrap text-[19px] font-black tracking-tight text-white">
          PORTAL ADMIN
        </span>
      </header>

      <nav aria-label="Navegación docente" className="flex flex-1 flex-col">
        <div className="space-y-1">
          {opciones.map((opcion) => renderOpcion(opcion))}
        </div>

        <div className="mt-auto pt-16 pb-5">
          {renderOpcion(
            {
              label: "Ayuda",
              href: "/docente/ayuda",
              icon: CircleHelp,
            },
            true,
          )}
        </div>
      </nav>
    </aside>
  );
}