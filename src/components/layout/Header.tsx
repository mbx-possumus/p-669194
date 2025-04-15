import { Link, useLocation } from "react-router-dom";
import { ProfileDropdown } from "../ui/ProfileDropdown";
import { SearchBar } from "../ui/SearchBar";
const info = {
  "/": {
    title: "Panel de inicio",
    description: "Hola Juan Perez 👋, aquí tienes el estado de tus equipos y próximas acciones."
  },
  "/cases": {
    title: "Casos",
    description: "Consulta y gestiona casos"
  },
  "/activities": {
    title: "Actividades",
    description: "Seguimiento de actividades comerciales y de servicio"
  },
  "/people": {
    title: "Personas",
    description: "Consulta y gestión de personas"
  },
  "/clients": {
    title: "Clientes",
    description: "Administración de clientes y sus activos"
  }
};
export const Header = () => {
  const {
    pathname
  } = useLocation();
  return <div className="mb-[30px]">
      <div className="flex justify-between items-center pb-5 border-b-[#E1E6E8] border-b border-solid max-sm:flex-col max-sm:items-start max-sm:gap-2.5">
        <h1 className="text-[#363636] tracking-[-0.48px] text-center font-bold text-5xl">
          {info[pathname].title}
        </h1>
        <div className="flex items-center gap-5 max-sm:hidden">
          <SearchBar />
          <div className="w-px h-[43px] bg-[#E1E6E8]" />
          <ProfileDropdown />
        </div>
      </div>
      <div className="flex justify-between mt-[7px] max-sm:flex-col max-sm:gap-2.5">
        <div className="text-[#707082] text-sm">
          {info[pathname].description}
        </div>
        <div className="text-[#707082] text-[13px] max-sm:self-end">
          <Link to="/"></Link> / {info[pathname].title}
        </div>
      </div>
    </div>;
};