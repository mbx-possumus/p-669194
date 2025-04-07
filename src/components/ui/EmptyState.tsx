import React from "react";

export const EmptyState: React.FC = () => {
  return (
    <div className="bg-[rgba(243,243,243,1)] flex flex-col items-center text-center justify-center mt-3 px-20 py-[59px] rounded-2xl">
      <div className="flex w-[321px] max-w-full flex-col items-stretch">
        <div className="text-base font-medium leading-[1.3] self-center">
          No hay nada aquí todavía.
        </div>
        <div className="text-xs font-normal leading-[26px] tracking-[0.24px]">
          Cuando añadas algo, los detalles aparecerán en esta pantalla.
        </div>
      </div>
    </div>
  );
};
