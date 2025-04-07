import React from "react";

interface CarouselIndicatorProps {
  count: number;
  activeIndex: number;
}

export const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  count,
  activeIndex,
}) => {
  return (
    <div className="flex gap-[11px] items-center">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`h-[3px] rounded-full ${
            index === activeIndex ? "w-[31px] bg-white" : "w-[22px] bg-white/25"
          }`}
        />
      ))}
    </div>
  );
};
