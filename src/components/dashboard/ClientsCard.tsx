import React from "react";
import { PriorityBadge } from "../ui/PriorityBadge";
import { NumericBadge } from "../ui/NumericBadge";
import { ChevronRight } from "lucide-react";
import { Client } from "@/pages/Clients";

export const ClientIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.54102 9.00001H10.4577M8.99935 7.54168V10.4583M8.99935 4.62501C11.1438 4.62501 13.1447 5.24262 14.8327 6.30939L13.3743 13.375H4.62435L3.16602 6.30866C4.91145 5.20561 6.93459 4.62169 8.99935 4.62501Z"
      stroke="#354052"
      strokeWidth="1.45833"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ClientsCardProps extends Client {
  onClick?: () => void;
}

export const ClientsCard: React.FC<ClientsCardProps> = ({
  clientName,
  responsiblePerson,
  priority,
  notifications,
  onClick,
}) => {
  return (
    <article className="flex items-center border relative bg-white p-6 rounded-2xl border-solid border-[#E1E6E8] max-md:w-full max-md:p-5 max-sm:h-auto max-sm:flex-wrap max-sm:p-4">
      <div className="w-[42px] h-[42px] flex justify-center items-center bg-[#EFF1F3] rounded-[13.125px]">
        <ClientIcon />
      </div>

      <div className="ml-[13px] max-sm:flex-1">
        <h2 className="font-bold text-base text-[#363636] leading-[20.8px]">
          {clientName}
        </h2>
        <p className="font-normal text-xs text-[#707082] leading-[17.4px] tracking-[0.24px] -mt-px">
          Responsable: {responsiblePerson}
        </p>
      </div>

      <div className="flex items-center gap-4 ml-auto max-md:gap-3 max-sm:w-full max-sm:justify-between max-sm:mt-4">
        <PriorityBadge priority={priority} />
        <NumericBadge value={notifications} />

        <button
          onClick={onClick}
          className="w-[43px] h-[43px] border flex justify-center items-center bg-white rounded-[50%] border-solid border-[#EFEEF1] hover:bg-gray-50 transition-colors"
          aria-label="View hospital details"
        >
          <ChevronRight />
        </button>
      </div>
    </article>
  );
};
