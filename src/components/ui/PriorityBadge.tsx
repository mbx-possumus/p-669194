import React from "react";

interface PriorityBadgeProps {
  priority: "Normal" | "High" | "Low";
  color?: string;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  color = "#3BA746",
}) => {
  return (
    <div className="w-[120px] h-11 border relative flex items-center bg-white pl-11 rounded-[22px] border-solid border-[#EFEEF1]">
      <div className="absolute w-8 h-8 flex justify-center items-center bg-[#EFF1F3] rounded-[21px] left-1.5 top-1.5">
        <div
          className="w-4 h-4 rounded-[21px]"
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="font-bold text-[8px] text-[#333] leading-[11.6px]">
          Prioridad
        </div>
        <div className="font-normal text-[10px] text-[#151718] leading-[22px] tracking-[0.2px]">
          {priority}
        </div>
      </div>
    </div>
  );
};
