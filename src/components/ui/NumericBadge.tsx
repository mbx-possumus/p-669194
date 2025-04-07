import React from "react";

interface NumericBadgeProps {
  value: number;
}

export const NumericBadge: React.FC<NumericBadgeProps> = ({ value }) => {
  return (
    <div className="w-8 h-8 text-white text-[21.5px] leading-[33.325px] bg-[#CE244C] rounded-[80.625px] flex items-center justify-center">
      {value}
    </div>
  );
};
