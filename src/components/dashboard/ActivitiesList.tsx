import { ChevronRight } from "lucide-react";

interface TaskHeaderProps {
  title: string;
  subtitle: string;
}

export const ToolIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.35422 7.54148H7.54172V5.35398L4.98964 2.8019C5.80604 2.41199 6.72323 2.28477 7.61493 2.43777C8.50663 2.59076 9.32896 3.01643 9.9687 3.65617C10.6084 4.29591 11.0341 5.11824 11.1871 6.00994C11.3401 6.90164 11.2129 7.81883 10.823 8.63523L15.198 13.0102C15.4881 13.3003 15.651 13.6937 15.651 14.104C15.651 14.5142 15.4881 14.9076 15.198 15.1977C14.9079 15.4878 14.5145 15.6508 14.1042 15.6508C13.694 15.6508 13.3006 15.4878 13.0105 15.1977L8.63547 10.8227C7.81908 11.2126 6.90188 11.3399 6.01018 11.1869C5.11849 11.0339 4.29615 10.6082 3.65641 9.96846C3.01667 9.32872 2.591 8.50638 2.43801 7.61469C2.28502 6.72299 2.41223 5.80579 2.80214 4.9894L5.35422 7.54148Z"
      stroke="white"
      strokeWidth="1.45833"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[17px] h-[17px] transform rotate-[-90deg]"
  >
    <path
      d="M6.96582 13.4143L11.2658 9.11431L6.96582 4.81431"
      stroke="#354052"
      strokeWidth="2.45714"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClipboardIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.99967 3.33333H4.66634C4.31272 3.33333 3.97358 3.47381 3.72353 3.72386C3.47348 3.97391 3.33301 4.31304 3.33301 4.66667V12.6667C3.33301 13.0203 3.47348 13.3594 3.72353 13.6095C3.97358 13.8595 4.31272 14 4.66634 14H11.333C11.6866 14 12.0258 13.8595 12.2758 13.6095C12.5259 13.3594 12.6663 13.0203 12.6663 12.6667V4.66667C12.6663 4.31304 12.5259 3.97391 12.2758 3.72386C12.0258 3.47381 11.6866 3.33333 11.333 3.33333H9.99967M5.99967 3.33333C5.99967 2.97971 6.14015 2.64057 6.3902 2.39052C6.64025 2.14048 6.97939 2 7.33301 2H8.66634C9.01996 2 9.3591 2.14048 9.60915 2.39052C9.8592 2.64057 9.99967 2.97971 9.99967 3.33333M5.99967 3.33333C5.99967 3.68696 6.14015 4.02609 6.3902 4.27614C6.64025 4.52619 6.97939 4.66667 7.33301 4.66667H8.66634C9.01996 4.66667 9.3591 4.52619 9.60915 4.27614C9.8592 4.02609 9.99967 3.68696 9.99967 3.33333M5.99967 8H6.00634M8.66634 8H9.99967M5.99967 10.6667H6.00634M8.66634 10.6667H9.99967"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserCircleIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.112 12.566C4.27701 12.0168 4.61464 11.5355 5.07483 11.1933C5.53502 10.8512 6.09323 10.6665 6.66667 10.6667H9.33333C9.9075 10.6665 10.4664 10.8516 10.9269 11.1945C11.3874 11.5374 11.725 12.0199 11.8893 12.57M2 8C2 8.78793 2.15519 9.56815 2.45672 10.2961C2.75825 11.0241 3.20021 11.6855 3.75736 12.2426C4.31451 12.7998 4.97595 13.2417 5.7039 13.5433C6.43185 13.8448 7.21207 14 8 14C8.78793 14 9.56815 13.8448 10.2961 13.5433C11.0241 13.2417 11.6855 12.7998 12.2426 12.2426C12.7998 11.6855 13.2417 11.0241 13.5433 10.2961C13.8448 9.56815 14 8.78793 14 8C14 7.21207 13.8448 6.43185 13.5433 5.7039C13.2417 4.97595 12.7998 4.31451 12.2426 3.75736C11.6855 3.20021 11.0241 2.75825 10.2961 2.45672C9.56815 2.15519 8.78793 2 8 2C7.21207 2 6.43185 2.15519 5.7039 2.45672C4.97595 2.75825 4.31451 3.20021 3.75736 3.75736C3.20021 4.31451 2.75825 4.97595 2.45672 5.7039C2.15519 6.43185 2 7.21207 2 8ZM6 6.66667C6 7.1971 6.21071 7.70581 6.58579 8.08088C6.96086 8.45595 7.46957 8.66667 8 8.66667C8.53043 8.66667 9.03914 8.45595 9.41421 8.08088C9.78929 7.70581 10 7.1971 10 6.66667C10 6.13623 9.78929 5.62753 9.41421 5.25245C9.03914 4.87738 8.53043 4.66667 8 4.66667C7.46957 4.66667 6.96086 4.87738 6.58579 5.25245C6.21071 5.62753 6 6.13623 6 6.66667Z"
      stroke="#193B63"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.667 2V4.66667M5.33366 2V4.66667M2.66699 7.33333H13.3337M2.66699 4.66667C2.66699 4.31304 2.80747 3.97391 3.05752 3.72386C3.30756 3.47381 3.6467 3.33333 4.00033 3.33333H12.0003C12.3539 3.33333 12.6931 3.47381 12.9431 3.72386C13.1932 3.97391 13.3337 4.31304 13.3337 4.66667V12.6667C13.3337 13.0203 13.1932 13.3594 12.9431 13.6095C12.6931 13.8595 12.3539 14 12.0003 14H4.00033C3.6467 14 3.30756 13.8595 3.05752 13.6095C2.80747 13.3594 2.66699 13.0203 2.66699 12.6667V4.66667ZM5.33366 10H6.66699V11.3333H5.33366V10Z"
      stroke="#193B63"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TaskHeader: React.FC<TaskHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex gap-[13px] items-start">
        <div className="w-[42px] h-[42px] flex-[shrink] bg-[#CE244C] flex items-center justify-center rounded-lg">
          <ToolIcon />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-[#363636] text-base font-semibold leading-[20.8px]">
            {title}
          </div>
          <div className="text-[#707082] text-xs font-normal leading-[17.4px] tracking-[0.24px]">
            {subtitle}
          </div>
        </div>
      </div>
      <button className="w-[43px] h-[43px] flex items-center justify-center border bg-white cursor-pointer rounded-full border-[#EFEEF1]">
        <ChevronRight />
      </button>
    </div>
  );
};

export const TaskInfo: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-3 max-sm:flex-col">
      <TaskBadge
        icon={<ClipboardIcon />}
        label="Caso"
        value="#254_a"
        iconBgColor="bg-[#CE244C]"
      />
      <TaskBadge
        icon={<UserCircleIcon />}
        label="Cliente"
        value="Hospital Carlos Pereyra"
      />
      <TaskBadge
        icon={<CalendarIcon />}
        label="Fecha pautada"
        value="25-02-2025"
      />
      <TaskBadge
        icon={<div className="w-4 h-4 bg-[#F5B87B] rounded-[21px]" />}
        label="Estado"
        value="Pendiente"
        iconBgColor="bg-[#EFF1F3]"
      />
    </div>
  );
};

interface TaskBadgeProps {
  icon: ReactNode;
  label: string;
  value: string;
  iconBgColor?: string;
}

export const TaskBadge: React.FC<TaskBadgeProps> = ({
  icon,
  label,
  value,
  iconBgColor = "#F1F3F5",
}) => {
  return (
    <div className="flex items-center h-11 border bg-white pl-1.5 pr-[15px] rounded-[22px] border-[#868E96]">
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-[21px] ${iconBgColor}`}
      >
        {icon}
      </div>
      <div className="flex flex-col ml-[9px]">
        <div className="text-[#868E96] text-[8px] font-semibold leading-[11.6px]">
          {label}
        </div>
        <div className="text-[#495057] text-[10px] font-normal leading-[22px] tracking-[0.2px]">
          {value}
        </div>
      </div>
    </div>
  );
};

export const ActivitiesList = ({ activities }: { activities: any[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {activities.map((activity) => (
        <article className="w-full p-6 max-md:p-5 max-sm:p-4">
          <div className="w-full border bg-white relative p-6 rounded-2xl border-[#E1E6E8]">
            <div className="flex flex-col gap-[34px]">
              <TaskHeader title={activity.title} subtitle={activity.subtitle} />
              <div className="w-full h-px bg-[#151718]" />
              <TaskInfo />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
