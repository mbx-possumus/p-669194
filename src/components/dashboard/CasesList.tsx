import { ChevronDown } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import { InfoBadge } from "../ui/InfoBadge";
import { cn } from "@/lib/utils";
import { useState } from "react";
interface ActivityCardProps {
  title: string;
  id: string;
  status: "cancelled" | "in-progress";
  className?: string;
}

const activities = [
  {
    title: "Viaje hasta el laboratorio",
    id: "0859-48",
    status: "cancelled" as const,
    className: "bg-[rgba(241,243,245,0.6)]",
  },
  {
    title: "Mantenimiento preventivo",
    id: "0859-49",
    status: "in-progress" as const,
    className: "bg-white",
  },
  {
    title: "Tareas varias IT",
    id: "0859-50",
    status: "in-progress" as const,
    className: "bg-[rgba(241,243,245,0.6)]",
  },
];

const ActivityCard = ({ title, id, status, className }: ActivityCardProps) => {
  return (
    <div
      className={cn(
        "w-full h-[68px] flex items-center justify-between px-6",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="text-[#193B63] text-xs font-medium leading-[15.6px]">
          {title}
        </div>
        <div className="text-[#151718] text-xs font-normal leading-[26.4px] tracking-[0.24px]">
          ID: {id}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <StatusBadge status={status} />
        <div className="w-[43px] h-[43px] rounded-full border border-[#EFEEF1] bg-white" />
      </div>
    </div>
  );
};

export const CasesList = ({ cases }: { cases: any[] }) => {
  const [selectedCase, setSelectedCase] = useState<any>(cases[0]);
  function handleSelectedCase(caseItem: any) {
    if (!selectedCase) {
      setSelectedCase(caseItem);
    } else if (selectedCase.id === caseItem.id) {
      setSelectedCase(null);
    } else {
      setSelectedCase(caseItem);
    }
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      {cases.map((caseItem) => {
        return (
          <div key={caseItem.id}>
            <div className="w-full h-[525px] bg-white flex flex-col rounded-2xl">
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[13px]">
                    <div className="w-[42px] h-[42px] flex-[shrink] bg-[#193B63] flex items-center justify-center rounded-[13.125px]">
                      <div className="w-[18px] h-[18px]" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[#193B63] text-base font-medium leading-[20.8px]">
                        Analizador de Iones Na-K
                      </div>
                      <div className="text-[#151718] text-xs font-normal leading-[26.4px] tracking-[0.24px]">
                        Mantenimiento preventivo
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className="w-[43px] h-[43px] rounded-full border border-[#EFEEF1] bg-white flex items-center justify-center cursor-pointer"
                      onClick={() => handleSelectedCase(caseItem)}
                    >
                      <ChevronDown className="w-[17px] h-[17px] text-[#354052]" />
                    </div>
                  </div>
                </div>
                {selectedCase && selectedCase.id === caseItem.id && (
                  <>
                    <div className="w-full h-px bg-[#151718] my-6" />
                    <div className="text-[#193B63] text-base font-medium leading-[20.8px] mb-4">
                      Actividades asociadas
                    </div>
                    <div className="flex flex-col gap-2">
                      {activities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto p-6">
                      <div className="flex items-center gap-3">
                        <InfoBadge
                          icon="user"
                          label="Cliente"
                          value="Laboratorio Pasteur S.A"
                          width="w-[173px]"
                        />
                        <InfoBadge
                          icon="calendar"
                          label="Edad del caso"
                          value="21 días"
                        />
                        <StatusBadge status="in-progress" />
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        <div className="text-[#868E96] text-right text-sm font-semibold leading-[21px]">
                          Agregar una actividad
                        </div>
                        <button className="w-[56px] h-[56px] rounded-full bg-[#343A40] border border-[#EFEEF1] flex items-center justify-center">
                          <div className="text-white text-2xl">+</div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
