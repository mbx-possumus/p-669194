import { EmptyState } from "@/components/ui/EmptyState";
import { FilterSection } from "@/components/ui/FilterSection";
import { CreateCaseModal } from "@/components/dashboard/CreateCaseModal";
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { CasesList } from "@/components/dashboard/CasesList";
import { PeopleList } from "@/components/dashboard/PeopleList";

export interface Person {
  name: string;
  email: string;
  avatarUrl: string;
  logoUrl: string;
  status: "available" | "busy" | "away";
}

export const People = () => {
  const [open, setOpen] = useState(false);

  const [people, setPeople] = useState<Person[]>([
    {
      email: "carlos_martinez@biofarma.com.ar",
      avatarUrl:
        "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/50c58cc072c0918bcde9fd27c3d532c9f638dff7?placeholderIfAbsent=true",
      logoUrl:
        "https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/0fdc0884d2823e9c5884a866f7b70523105b64a8?placeholderIfAbsent=true",
      status: "available",
      name: "Carlos Martinez",
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
                    <span className="self-stretch my-auto">Nuevo caso</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/44d09d28a511db5de088470d57688e8be5424c4b?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Add"
                    />
                  </button>
                </div>
                <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch text-[rgba(54,54,54,1)] mt-[5px]">
                    <div className="text-[22px] font-medium leading-[1.3] mb-4">
                      Empleados
                    </div>
                    {people.length > 0 ? (
                      <PeopleList people={people} />
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
