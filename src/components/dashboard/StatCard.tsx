
interface StatCardProps {
  value: string | number;
  label: string;
  iconSrc?: string;
  onClick?: () => void;
  variant?: "default" | "highlighted";
}

export const StatCard = ({ 
  value, 
  label, 
  iconSrc = "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/e7e90d50f32fd63250a85925cdf887283853dc82?placeholderIfAbsent=true", 
  onClick,
  variant = "default"
}: StatCardProps) => {
  const variantClasses = variant === "highlighted" 
    ? "border-2 border-[rgba(25,59,99,0.2)] bg-[rgba(25,59,99,0.03)]" 
    : "bg-white hover:shadow-md";

  return (
    <div 
      className={`flex min-w-60 items-center gap-[40px_100px] text-[rgba(25,59,99,1)] justify-between grow shrink w-[334px] p-6 rounded-2xl max-md:px-5 transition-all duration-200 cursor-pointer ${variantClasses}`}
      onClick={onClick}
    >
      <div className="self-stretch flex flex-col w-[75px] my-auto">
        <div className="text-[62px] font-medium leading-[0.8] max-md:text-[40px]">
          {value}
        </div>
        <div className="text-sm font-semibold leading-[1.3] z-10 mr-[-25px] mt-3">
          {label}
        </div>
      </div>
      <img
        src={iconSrc}
        className="aspect-[1] object-contain w-[29px] self-stretch shrink-0 my-auto transition-transform hover:scale-110"
        alt="Stat icon"
      />
    </div>
  );
};
