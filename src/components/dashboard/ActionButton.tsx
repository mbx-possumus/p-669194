
import { ButtonHTMLAttributes } from "react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  icon: string;
  label: string;
  variant?: "default" | "primary" | "secondary";
}

export const ActionButton = ({ 
  icon, 
  label, 
  variant = "default",
  onClick,
  ...props 
}: ActionButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "border-[rgba(25,59,99,1)] hover:bg-[rgba(25,59,99,0.05)]";
      case "secondary":
        return "border-[rgba(59,167,70,1)] hover:bg-[rgba(59,167,70,0.05)]";
      default:
        return "border-white hover:border-gray-200 hover:shadow-sm";
    }
  };

  return (
    <div 
      className={`flex min-h-[126px] flex-col items-center grow shrink w-[142px] px-[30px] py-[18px] rounded-2xl border-solid border-2 transition-all duration-200 cursor-pointer active:scale-95 ${getVariantClasses()}`}
      onClick={onClick}
      {...props}
    >
      <div className="rotate-[1.224648970167536e-16rad] flex items-center gap-[17px]">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[69px] self-stretch my-auto rounded-[28px]"
          alt={label}
        />
      </div>
      <div className="text-[rgba(54,54,54,1)] text-sm font-semibold text-center">
        {label}
      </div>
    </div>
  );
};
