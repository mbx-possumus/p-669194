import React from "react";
import { Dialog, DialogContent, DialogPortal } from "./dialog";

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction: {
    label: string;
    onClick: () => void;
  };
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  isOpen,
  onClose,
  title,
  message,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogContent className="max-w-[1000px]">
          <div className="bg-white flex w-full flex-col items-center text-center pl-20 pr-5 pt-[33px] pb-[203px] rounded-2xl max-md:max-w-full max-md:mr-1.5 max-md:pl-5 max-md:pb-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a4c461f05ef64f219f461f3c2e29acff/cd1a4b8fddd78d9d2cccad8921735232dddb97a2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[117px] max-w-full mt-[153px] max-md:mt-10"
              alt="Success illustration"
            />
            <div className="w-[453px] max-w-full text-[rgba(54,54,54,1)] mt-[41px] max-md:mt-10">
              <div className="flex w-full flex-col max-md:max-w-full">
                <h1 className="text-2xl font-semibold leading-[1.3] max-md:max-w-full">
                  {title}
                </h1>
                <p className="text-base font-normal mt-3 max-md:max-w-full">
                  {message}
                </p>
              </div>
            </div>
            <div className="flex mb-[-41px] items-center gap-4 text-[17px] font-semibold leading-[1.2] mt-[42px] max-md:mt-10 max-md:mb-2.5">
              <button
                onClick={secondaryAction.onClick}
                className="self-stretch bg-[rgba(245,245,245,0.25)] shadow-[0px_5px_12px_rgba(0,0,0,0.1)] min-h-11 gap-2.5 text-[rgba(54,54,54,1)] my-auto px-6 rounded-lg max-md:px-5"
              >
                {secondaryAction.label}
              </button>
              <button
                onClick={primaryAction.onClick}
                className="self-stretch bg-[rgba(206,36,76,1)] shadow-[0px_5px_19px_rgba(206,36,76,0.2)] min-h-11 gap-2 text-white my-auto px-5 rounded-lg"
              >
                {primaryAction.label}
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
