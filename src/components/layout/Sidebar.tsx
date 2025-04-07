import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    path: "/",
    label: "Inicio",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/86c83c9818e39e10e0784e37d34e66cb8608530e?placeholderIfAbsent=true",
    section: "Operaciones",
  },
  {
    path: "/cases",
    label: "Casos",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/11d91bffd0097a5209ec1b53c76e18966bb8097c?placeholderIfAbsent=true",
    section: "Operaciones",
  },
  {
    path: "/activities",
    label: "Actividades",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/9b86a8fd3c8cc404fddc3373b0b2abacb341e7b9?placeholderIfAbsent=true",
    section: "Operaciones",
  },
  {
    path: "/people",
    label: "Personas",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/cca2d9108ca13912841d4fa8b8f1a3d15e87932e?placeholderIfAbsent=true",
    section: "Administración",
  },
  {
    path: "/clients",
    label: "Clientes",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/cc06db7a5b76236da667b25d6cec3f43fa578be2?placeholderIfAbsent=true",
    section: "Administración",
  },
  {
    path: "/settings",
    label: "Configuración",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/b8bc69ed111ae93fa61051ce9a2e0708507b164d?placeholderIfAbsent=true",
    section: "Footer",
  },
  {
    path: "/logout",
    label: "Salir",
    icon: "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/b7902ba7192752d15807f213dca95201d24672dc?placeholderIfAbsent=true",
    section: "Footer",
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderItems = (section: string) => {
    return sidebarItems
      .filter((item) => item.section === section)
      .map((item) => (
        <button
          key={item.path}
          className={cn(
            "bg-white flex min-h-10 items-center gap-2.5 text-base text-[rgba(112,112,130,1)] font-normal whitespace-nowrap leading-none mt-1 px-2.5 rounded-lg",
            isActive(item.path) && "bg-[rgba(253,244,246,1)]"
          )}
          onClick={() => navigate(item.path)}
        >
          <img
            src={item.icon}
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt={item.label}
          />
          {isOpen && <span>{item.label}</span>}
        </button>
      ));
  };

  return (
    <nav
      className={cn(
        "bg-white border flex flex-col self-stretch overflow-hidden items-stretch px-2.5 py-[18px] rounded-2xl border-[rgba(225,230,232,1)] border-solid",
        isOpen ? "w-max" : "w-20 items-center",
        className
      )}
    >
      <div className="flex items-stretch gap-7 ml-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/8cec120edb8aca1cacec78e08d4ccce8fe432f16?placeholderIfAbsent=true"
          className="aspect-[4] object-contain w-40 shrink-0 max-w-full"
          alt="Logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/197c7e688906df56cefd3e78a4909209ac0f067e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 shrink-0 my-auto cursor-pointer"
          alt="Menu"
          onClick={toggleSidebar}
        />
      </div>
      {!isOpen && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/197c7e688906df56cefd3e78a4909209ac0f067e?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 shrink-0 mt-3 cursor-pointer"
          alt="Menu"
          onClick={toggleSidebar}
        />
      )}

      <div className="border w-[219px] shrink-0 h-px mt-4 border-[rgba(253,244,246,1)] border-solid" />

      {isOpen && (
        <div className="text-[rgba(121,121,138,1)] text-xs font-normal leading-none tracking-[0.12px] uppercase mt-11">
          Operaciones
        </div>
      )}
      {renderItems("Operaciones")}

      <div className="border w-[219px] shrink-0 h-px mt-[9px] border-[rgba(253,244,246,1)] border-solid" />

      {isOpen && (
        <div className="text-[rgba(121,121,138,1)] text-xs font-normal leading-none tracking-[0.12px] uppercase mt-2.5">
          Administración
        </div>
      )}
      {renderItems("Administración")}

      <div className="border w-[219px] shrink-0 h-px mt-3 border-[rgba(253,244,246,1)] border-solid" />

      <div className="fixed bottom-3 left-3 right-0">
        {renderItems("Footer")}
      </div>
    </nav>
  );
};
