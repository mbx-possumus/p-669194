import React from "react";

interface StatusIndicatorProps {
  status: "available" | "busy" | "away";
  label?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = "available",
  label = "Libre",
}) => {
  const statusColors = {
    available: "bg-[rgba(59,167,70,1)]",
    busy: "bg-[rgba(206,36,76,1)]",
    away: "bg-[rgba(255,193,7,1)]",
  };

  return (
    <div className="bg-white border flex items-center gap-[9px] p-1.5 rounded-[22px] border-[rgba(239,238,241,1)] border-solid">
      <div className="bg-[rgba(239,241,243,1)] flex flex-col items-center justify-center w-8 h-8 px-1.5 rounded-[21px]">
        <div
          className={`flex w-4 shrink-0 h-4 rounded-[21px] ${statusColors[status]}`}
        />
      </div>
      <div
        className="text-[rgba(21,23,24,1)] text-[10px] font-normal leading-[22px] tracking-[0.2px]"
        role="status"
        aria-label={`Status: ${label}`}
      >
        {label}
      </div>
    </div>
  );
};
