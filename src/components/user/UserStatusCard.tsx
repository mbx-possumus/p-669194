import React from "react";
import { UserAvatar } from "./UserAvatar";
import { StatusIndicator } from "./StatusIndicator";
import { Person } from "@/pages/People";

export const UserStatusCard: React.FC<Person> = ({
  name,
  email,
  avatarUrl,
  logoUrl,
  status = "available",
}) => {
  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <div className="bg-white border flex w-full items-stretch gap-5 flex-wrap justify-between p-6 rounded-2xl border-[rgba(225,230,232,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="flex gap-3 text-xs text-[rgba(21,23,24,1)] font-normal whitespace-nowrap tracking-[0.24px] leading-[26px]">
          <img
            src={logoUrl}
            alt="Company logo"
            className="aspect-[1] object-contain w-[42px] shrink-0 rounded-3xl"
          />

          <div className="flex flex-col">
            <div className="basis-auto text-base font-medium leading-[20.8px]">
              {name}
            </div>
            <div className="basis-auto text-xs font-normal leading-[17.4px] tracking-[0.24px]">
              {email}
            </div>
          </div>
        </div>
        <div className="flex items-stretch gap-4">
          <StatusIndicator status={status} />
          <UserAvatar src={avatarUrl} alt={`${email}'s avatar`} />
        </div>
      </div>
    </div>
  );
};
