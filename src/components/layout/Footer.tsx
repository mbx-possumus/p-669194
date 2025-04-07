export const Footer = () => {
  return (
    <footer className="flex w-[-webkit-fill-available] flex-1 fixed bottom-0 items-center text-[11px] text-[#6F757A] font-normal leading-[1.3] justify-between p-3.5 border-[rgba(207,209,211,1)] border-t">
      <div className="self-stretch my-auto">
        Copyright © 2025 Biofarma / Todos los Derechos reservados.
      </div>
      <div className="self-stretch flex items-center gap-2.5 text-right my-auto">
        <div className="self-stretch my-auto">Desarrollado por</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/ad59b4424c08cd0324d68e55e261fe69354d7ae6?placeholderIfAbsent=true"
          className="aspect-[5.62] object-contain w-[90px] self-stretch shrink-0 my-auto"
          alt="Developer logo"
        />
      </div>
    </footer>
  );
};
