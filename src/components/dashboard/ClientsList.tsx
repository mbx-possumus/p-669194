import { ClientsCard } from "./ClientsCard";

export const ClientsList = ({ clients }: { clients: any[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {clients.map((client) => (
        <ClientsCard {...client} />
      ))}
    </div>
  );
};
