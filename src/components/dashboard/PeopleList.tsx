import { Person } from "@/pages/People";
import { UserStatusCard } from "../user/UserStatusCard";

export const PeopleList = ({ people }: { people: Person[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {people.map((person) => (
        <UserStatusCard {...person} />
      ))}
    </div>
  );
};
