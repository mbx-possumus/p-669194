import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toggle as CustomToggle } from "@/components/ui/toggle";
import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { SuccessMessage } from "@/components/ui/SuccessMessage";
interface CaseFormData {
  team: string;
  client: string;
  equipmentStatus: string;
  associatedUsers: string;
  email: string;
  phone: string;
  timeRange: string;
}

export const CreateCaseModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { register, handleSubmit } = useForm<CaseFormData>();
  const [isNewEquipment, setIsNewEquipment] = useState(true);
  const [hasTraining, setHasTraining] = useState(true);
  const [isSuccessMessageOpen, setIsSuccessMessageOpen] = useState(false);

  const onSubmit = (data: CaseFormData) => {
    console.log(data);
    setIsSuccessMessageOpen(true);
  };

  const handleAddActivities = () => {
    console.log("Agregar actividades");
  };

  const handleViewCases = () => {
    console.log("Ver todos mis casos");
  };

  const FormSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="flex-1">
      <div className="mb-8">
        <div className="text-[#363636] text-sm mb-[18px]">{title}</div>
        {children}
      </div>
    </div>
  );

  const FormField = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-4">
      <label className="text-xs font-semibold text-[#333] mb-2 block">
        {label}
      </label>
      {children}
    </div>
  );

  if (!open) {
    return null;
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogContent className="max-w-[1000px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between items-center p-8">
                <div className="text-base text-[#363636] tracking-[-0.48px]">
                  #254_a (ID del caso)
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl max-sm:p-4">
                <h1 className="text-2xl text-[#363636] mb-2">
                  Crear nuevo caso
                </h1>
                <p className="text-xs text-[#707082] mb-8">
                  Completa los datos para crear y gestionar el caso.
                </p>

                <div className="flex gap-10 max-md:flex-col max-sm:gap-5">
                  <FormSection title="Equipo asociado">
                    <FormField label="Equipo">
                      <select
                        {...register("team")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      >
                        <option value="">Selecciona el equipo</option>
                      </select>
                    </FormField>

                    <div className="inline-flex items-center gap-2 border rounded text-[9px] text-[#727986] opacity-40 mx-0 my-3 px-2 py-1 border-solid border-[#727986]">
                      <i className="ti ti-info-circle" />
                      <span>Más información del equipo</span>
                    </div>

                    <FormField label="Cliente">
                      <select
                        {...register("client")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      >
                        <option value="">Selecciona el cliente</option>
                      </select>
                    </FormField>

                    <FormField label="Estado del equipo">
                      <select
                        {...register("equipmentStatus")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      >
                        <option value="">Selecciona el estado</option>
                      </select>
                    </FormField>

                    <CustomToggle
                      label="¿El equipo es nuevo?"
                      value={isNewEquipment ? "true" : "false"}
                      onValueChange={setIsNewEquipment}
                    />
                  </FormSection>

                  <FormSection title="Responsables">
                    <FormField label="Usuarios asociados">
                      <select
                        {...register("associatedUsers")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      >
                        <option value="">Selecciona usuarios</option>
                      </select>
                    </FormField>

                    <FormField label="E-mail">
                      <input
                        type="email"
                        placeholder="Ingresa el correo"
                        {...register("email")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      />
                    </FormField>

                    <FormField label="Teléfono">
                      <input
                        type="tel"
                        placeholder="Ingresa número telefónico"
                        {...register("phone")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      />
                    </FormField>

                    <CustomToggle
                      label="¿El usuario tiene capacitación sobre el equipo?"
                      value={hasTraining ? "true" : "false"}
                      onValueChange={setHasTraining}
                    />
                  </FormSection>

                  <FormSection title="Disponibilidad">
                    <FormField label="¿En qué rango horario se espera al especialista?">
                      <select
                        {...register("timeRange")}
                        className="w-full h-10 border rounded text-xs text-[#868E96] px-2.5 py-0 border-solid border-[#868E96]"
                      >
                        <option value="">Seleccionar rango horario</option>
                      </select>
                    </FormField>
                  </FormSection>
                </div>
              </div>

              <div className="flex justify-end gap-4 p-8">
                <button
                  type="button"
                  className="text-[#363636] text-[17px] font-semibold bg-[rgba(245,245,245,0.25)] px-6 py-3 rounded-lg border-2 border-solid border-[#8E8B97]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="border text-white text-[17px] font-semibold bg-[#CE244C] px-5 py-3 rounded-lg border-solid border-white"
                >
                  Crear caso
                </button>
              </div>
            </form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
      <SuccessMessage
        isOpen={isSuccessMessageOpen}
        onClose={() => {
          setIsSuccessMessageOpen(false);
          setOpen(false);
        }}
        title="¡Caso creado con éxito!"
        message="Podés consultarlo y gestionarlo desde tu panel principal."
        primaryAction={{
          label: "Agregar actividades",
          onClick: handleAddActivities,
        }}
        secondaryAction={{
          label: "Ver todos mis casos",
          onClick: handleViewCases,
        }}
      />
    </>
  );
};
