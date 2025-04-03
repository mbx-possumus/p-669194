interface StatusBadgeProps {
  status: "active" | "pending" | "completed";
  label: string;
}

export const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return (
    <div className="w-[62px] text-[10px] text-[rgba(51,51,51,1)] font-semibold leading-none">
      <div className="bg-[rgba(246,246,248,1)] flex items-stretch gap-1 px-[5px] py-2 rounded-[20px]">
        <div className="bg-[rgba(59,167,70,1)] flex w-2 shrink-0 h-2 rounded-[50%]" />
        <div>{label}</div>
      </div>
    </div>
  );
};
