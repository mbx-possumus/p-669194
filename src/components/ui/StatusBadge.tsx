
interface StatusBadgeProps {
  status: "active" | "pending" | "completed";
  label: string;
}

export const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-[rgba(59,167,70,1)]"; // Green
      case "pending":
        return "bg-[rgba(255,153,0,1)]"; // Orange
      case "completed":
        return "bg-[rgba(73,132,203,1)]"; // Blue
      default:
        return "bg-[rgba(59,167,70,1)]";
    }
  };

  return (
    <div className="w-[62px] text-[10px] text-[rgba(51,51,51,1)] font-semibold leading-none">
      <div className="bg-[rgba(246,246,248,1)] flex items-stretch gap-1 px-[5px] py-2 rounded-[20px]">
        <div className={`flex w-2 shrink-0 h-2 rounded-[50%] ${getStatusColor()}`} />
        <div>{label}</div>
      </div>
    </div>
  );
};
