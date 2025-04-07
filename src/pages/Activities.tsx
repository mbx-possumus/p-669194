import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSection } from "@/components/ui/FilterSection";
import { CreateCaseModal } from "@/components/dashboard/CreateCaseModal";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { CasesList } from "@/components/dashboard/CasesList";
import { ActivitiesList } from "@/components/dashboard/ActivitiesList";

export const Activities = () => {
  const [open, setOpen] = useState(false);

  const [activities, setActivities] = useState<any[]>([
    {
      id: 1,
      title: "Actividad 1",
      subtitle: "Subtítulo de la actividad 1",
    },
  ]);

  return (
    <>
      <CreateCaseModal open={open} setOpen={() => setOpen(!open)} />
      <MainLayout>
        <div className="bg-white flex w-full flex-col items-stretch mt-2.5 py-[17px] rounded-2xl h-full">
          <div className="flex w-full flex-col px-[19px] h-full">
            <div className="self-stretch h-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch h-full">
                <div className="w-[22%] max-md:w-full max-md:ml-0 relative h-full">
                  <FilterSection />
                  <button
                    className="bg-[rgba(206,36,76,1)] shadow-[0px_5px_19px_rgba(206,36,76,0.2)] flex min-h-11 items-center gap-2 text-[17px] text-white font-semibold text-center leading-[1.2] justify-center ml-[19px] mt-[9px] pl-8 pr-5 rounded-[22px] max-md:ml-2.5 max-md:pl-5 absolute bottom-0 left-0 w-full"
                    onClick={() => setOpen(true)}
                  >
                    <span className="self-stretch my-auto">
                      Nueva actividad
                    </span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/44d09d28a511db5de088470d57688e8be5424c4b?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Add"
                    />
                  </button>
                </div>
                <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch text-[rgba(54,54,54,1)] mt-[5px]">
                    <div className="text-[22px] font-medium leading-[1.3]">
                      Resumen de registros
                    </div>
                    {activities.length > 0 ? (
                      <ActivitiesList activities={activities} />
                    ) : (
                      <EmptyState />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};
