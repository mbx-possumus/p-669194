
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActionButton } from "@/components/dashboard/ActionButton";
import { CaseCard } from "@/components/dashboard/CaseCard";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [highlightedStat, setHighlightedStat] = useState<string | null>(null);

  const handleStatClick = (statName: string) => {
    setHighlightedStat(statName === highlightedStat ? null : statName);
    toast({
      title: `${statName} seleccionado`,
      description: "Has seleccionado esta estadística.",
    });
  };

  const handleActionClick = (action: string) => {
    toast({
      title: `${action}`,
      description: `Has iniciado la acción: ${action}.`,
    });
  };

  const handleCaseClick = (title: string) => {
    toast({
      title: "Caso seleccionado",
      description: `Has seleccionado el caso: ${title}.`,
    });
  };

  return (
    <div className="relative flex items-start gap-2.5 overflow-hidden p-6 max-md:px-5">
      <div className="absolute z-0 flex min-w-60 w-[1985px] shrink-0 h-[1349px] right-[-705px] bottom-0 max-md:max-w-full" />
      <div className="z-0 flex min-w-60 items-stretch gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Sidebar />

        <main className="min-w-60 flex-1 shrink basis-5 max-md:max-w-full">
          <div className="min-h-[700px] w-full max-md:max-w-full">
            <h1 className="text-[rgba(25,59,99,1)] text-2xl font-medium">
              Hola, Juan Carlos
            </h1>

            <div className="flex w-full gap-4 flex-wrap mt-6 max-md:max-w-full">
              <StatCard 
                value={15} 
                label="Casos activos" 
                onClick={() => handleStatClick("Casos activos")}
                variant={highlightedStat === "Casos activos" ? "highlighted" : "default"}
              />
              <StatCard 
                value={7} 
                label="Actividades pendientes" 
                onClick={() => handleStatClick("Actividades pendientes")}
                variant={highlightedStat === "Actividades pendientes" ? "highlighted" : "default"}
              />
              <ActionButton
                icon="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/1c7dc74162102ba7e01d1b277e6ae147a5a35e0b?placeholderIfAbsent=true"
                label="Nuevo caso"
                variant="primary"
                onClick={() => handleActionClick("Nuevo caso")}
              />
              <ActionButton
                icon="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/fbe5d41f8a7b0f33f49a785dda1d64b5fe81ffb9?placeholderIfAbsent=true"
                label="Nueva actividad"
                variant="secondary"
                onClick={() => handleActionClick("Nueva actividad")}
              />
            </div>

            <h2 className="text-[rgba(25,59,99,1)] text-base font-medium leading-[1.3] tracking-[-0.48px] mt-6 max-md:max-w-full">
              Los siguientes casos tienen actividades asignadas a vos
            </h2>

            <div className="flex w-full gap-4 flex-1 flex-wrap h-full mt-6 max-md:max-w-full">
              <CaseCard
                title="Analizador de Iones Na-K"
                client="Laboratorio Pasteur S.A"
                days={24}
                activities={3}
                status="active"
                onClick={() => handleCaseClick("Analizador de Iones Na-K (Activo)")}
                assignees={[
                  "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/179147dd07aee4773f553821b8fda17769c055bd?placeholderIfAbsent=true",
                  "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/c4b5d45fff96e7541906bac01931c7c0eaa93708?placeholderIfAbsent=true",
                ]}
              />
              <CaseCard
                title="Analizador de Iones Na-K"
                client="Laboratorio Pasteur S.A"
                days={24}
                activities={3}
                status="pending"
                onClick={() => handleCaseClick("Analizador de Iones Na-K (Pendiente)")}
                assignees={[
                  "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/dfd0136b6beab37af564934dbf14a50d535150ed?placeholderIfAbsent=true",
                  "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/db20a3c69aa52246f00c9187cc0077fbd0664227?placeholderIfAbsent=true",
                ]}
              />
              <CaseCard
                title="Analizador de Iones Na-K"
                client="Laboratorio Pasteur S.A"
                days={24}
                activities={3}
                status="completed"
                onClick={() => handleCaseClick("Analizador de Iones Na-K (Completado)")}
              />
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
