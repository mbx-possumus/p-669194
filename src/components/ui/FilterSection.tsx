import React from "react";

export const FilterSection: React.FC = () => {
  return (
    <div className="text-xs">
      <div className="text-[rgba(54,54,54,1)] text-base font-medium leading-[1.3]">
        Opciones avanzadas
      </div>
      <div className="flex w-full flex-col items-stretch mt-[21px]">
        <div className="text-[rgba(73,80,87,1)] font-semibold leading-none">
          Buscar por
        </div>
        <div className="rounded border flex items-stretch gap-5 text-[rgba(134,142,150,1)] font-normal tracking-[0.24px] leading-[26px] justify-between mt-1 px-[7px] py-[3px] border-[rgba(134,142,150,1)] border-solid">
          <div>Ej: Analizador de Iones</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/00c69df7c621b56545d404c445c6a762dfe0a697?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0 my-auto"
            alt="Search"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-[rgba(73,80,87,1)] mt-[21px]">
        <div className="font-semibold leading-none">Filtrar</div>
        <div className="rounded border flex w-full items-stretch gap-5 font-normal leading-loose justify-between mt-1 px-[9px] py-1 border-[rgba(134,142,150,1)] border-solid">
          <div className="bg-[rgba(241,243,245,1)] flex items-center gap-2 px-2 py-[3px] rounded-lg">
            <div className="self-stretch gap-2.5 my-auto">Asignadas a mí</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/365f277746dd05d48b06bbf847e2356e4a463f8a?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[11px] self-stretch shrink-0 my-auto"
              alt="Remove"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/b8749bcffecd3c4fe8a69c7e9dce19351ce8e145?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0 my-auto"
            alt="Dropdown"
          />
        </div>
      </div>
    </div>
  );
};
