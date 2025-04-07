import { cn } from "@/lib/utils";
import { LucideIcon, User, CalendarClock } from "lucide-react";

interface InfoBadgeProps {
  icon: "user" | "calendar";
  label: string;
  value: string;
  className?: string;
  width?: string;
}

export const InfoBadge = ({
  icon,
  label,
  value,
  className,
  width = "w-[120px]",
}: InfoBadgeProps) => {
  const icons: Record<string, LucideIcon> = {
    user: User,
    calendar: CalendarClock,
  };

  const Icon = icons[icon];

  return (
    <div
      className={cn(
        `${width} h-11 flex items-center bg-white border rounded-[22px] border-[#EFEEF1]`,
        className
      )}
    >
      <div className="w-8 h-8 bg-[#EFF1F3] flex items-center justify-center ml-1.5 rounded-[21px]">
        <Icon className="w-4 h-4 text-[#6D7582]" />
      </div>
      <div className="flex flex-col ml-[9px]">
        <div className="text-[#333] text-[8px] font-semibold leading-[11.6px]">
          {label}
        </div>
        <div className="text-[#151718] text-[10px] font-normal leading-[22px] tracking-[0.2px]">
          {value}
        </div>
      </div>
    </div>
  );
};
