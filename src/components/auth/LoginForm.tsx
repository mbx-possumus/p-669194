import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[400px] mx-auto">
      <h1 className="text-[#363636] text-[44px] font-medium leading-[57.2px] mb-[88px]">
        Bienvenido
      </h1>

      <div className="space-y-6">
        <div className="space-y-1">
          <Label
            htmlFor="username"
            className="text-[#363636] text-base leading-[23.2px]"
          >
            Usuario
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Ingrese los datos de registro"
            className="h-10 rounded text-sm text-[rgba(20,20,20,0.60)] px-3.5 border-[#868E96]"
            {...register("username")}
          />
        </div>

        <div className="space-y-1">
          <Label
            htmlFor="password"
            className="text-[#363636] text-base leading-[23.2px]"
          >
            Contraseña
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Ingrese contraseña"
            className="h-10 rounded text-sm text-[rgba(20,20,20,0.60)] px-3.5 border-[#868E96]"
            {...register("password")}
          />
        </div>
      </div>

      <div className="text-[#363636] text-base leading-4 tracking-[0.32px] cursor-pointer text-right mt-4">
        ¿Olvidó su contraseña?
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Checkbox
          id="rememberMe"
          className="w-6 h-6 rounded border-[1.94737px] border-[#ACB0BA]"
          {...register("rememberMe")}
        />
        <Label
          htmlFor="rememberMe"
          className="text-[#333] text-sm leading-[14px] tracking-[0.28px]"
        >
          Recordarme
        </Label>
      </div>

      <button
        type="submit"
        className="text-white text-[21px] font-semibold leading-[25.2px] w-full h-[54px] bg-[#CE244C] border shadow-[0px_6px_24px_0px_rgba(206,36,76,0.20),0px_0px_9px_0px_rgba(255,255,255,0.35)_inset] backdrop-blur-[[27.5px]] mt-[37px] rounded-[27px] border-solid border-white"
        onClick={handleSubmit(onSubmit)}
      >
        Ingresar
      </button>
    </form>
  );
};
