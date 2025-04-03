
import { StatusBadge } from "@/components/ui/StatusBadge";

interface CaseCardProps {
  title: string;
  client: string;
  days: number;
  activities: number;
  assignees?: string[];
  status?: "active" | "pending" | "completed";
  onClick?: () => void;
}

export const CaseCard = ({
  title,
  client,
  days,
  activities,
  assignees,
  status = "active",
  onClick,
}: CaseCardProps) => {
  const statusLabels = {
    active: "En curso",
    pending: "Pendiente",
    completed: "Completado",
  };

  return (
    <div 
      className="bg-white relative flex min-w-[350px] flex-col w-[375px] flex-1 shrink basis-[0%] px-6 py-4 rounded-2xl max-md:px-5 transition-all duration-200 hover:shadow-md cursor-pointer active:scale-[0.99]"
      onClick={onClick}
    >
      <div className="self-stretch z-0 flex min-h-32 w-full flex-col items-stretch">
        <div>
          <StatusBadge status={status} label={statusLabels[status]} />
          <div className="text-[rgba(25,59,99,1)] text-base font-medium leading-[1.1] tracking-[-0.48px] mt-2">
            {title}
          </div>
        </div>
        <div className="text-[rgba(21,23,24,1)] text-[13px] font-normal leading-[22px] mt-1">
          Cliente: {client}
        </div>
        <div className="text-[rgba(21,23,24,1)] text-[10px] font-normal leading-[17px] mt-1">
          {days} días
        </div>
        <div className="text-[rgba(21,23,24,1)] text-[13px] font-normal leading-[22px] mt-1">
          Asignados
        </div>
      </div>
      <div className="self-stretch w-6 bg-[rgba(25,59,99,1)] absolute z-0 min-h-6 gap-2.5 text-xs text-white font-bold whitespace-nowrap text-center leading-loose h-6 px-0.5 rounded-[50px] right-[18px] top-4">
        {activities}
      </div>
      {assignees?.map((assignee, index) => (
        <img
          key={index}
          src={assignee}
          className="aspect-[1.21] object-contain w-[29px] absolute z-0 right-[-65px] h-6 rounded-[18px] bottom-[23px]"
          style={{ right: `${-65 - index * 21}px` }}
          alt="Assignee"
        />
      ))}
    </div>
  );
};
