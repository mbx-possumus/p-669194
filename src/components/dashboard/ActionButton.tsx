interface ActionButtonProps {
  icon: string;
  label: string;
}

export const ActionButton = ({ icon, label }: ActionButtonProps) => {
  return (
    <div className="flex min-h-[126px] flex-col items-center grow shrink w-[142px] px-[30px] py-[18px] rounded-2xl border-white border-solid border-2 max-md:px-5">
      <div className="rotate-[1.224648970167536e-16rad] flex items-center gap-[17px]">
        <img
          src={icon}
          className="aspect-[1] object-contain w-[69px] self-stretch my-auto rounded-[28px]"
          alt={label}
        />
      </div>
      <div className="text-[rgba(54,54,54,1)] text-sm font-semibold text-center">
        {label}
      </div>
    </div>
  );
};
