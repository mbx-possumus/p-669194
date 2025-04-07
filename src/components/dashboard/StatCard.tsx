interface StatCardProps {
  count: number;
  label: string;
}

export const StatCard = ({ count, label }: StatCardProps) => {
  return (
    <div className="w-[395px] h-[184px] relative bg-white px-[19px] py-7 rounded-2xl max-md:w-full">
      <div className="text-[108px] text-[#363636] leading-[86.4px]">
        {count}
      </div>
      <div className="text-base text-[#151718] mt-[7px]">{label}</div>
      <div className="absolute flex gap-4 right-6 bottom-6">
        <div className="w-[43px] h-[43px] flex items-center justify-center rounded-[50%]">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="21.5" r="21.5" transform="rotate(-90 21.5 21.5)" fill="#CE244C"/>
              <circle cx="21.5" cy="21.5" r="21" transform="rotate(-90 21.5 21.5)" stroke="white" stroke-opacity="0.25"/>
              <path d="M20.9025 15.7097V26.0968M15.709 20.9033H26.0961" stroke="white" stroke-width="2.48" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
            }}
          />
        </div>
        <div className="w-[43px] h-[43px] flex items-center justify-center rounded-[50%]">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21.5" cy="21.5" r="21" transform="rotate(-90 21.5 21.5)" fill="white" stroke="#EFEEF1"/>
            </svg>`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
