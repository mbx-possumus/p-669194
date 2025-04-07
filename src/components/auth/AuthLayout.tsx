import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselIndicator } from "./CarouselIndicator";
import { type CarouselApi } from "@/components/ui/carousel";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      id: 1,
      text: "Somos especialistas en brindar soluciones médicas",
    },
    {
      id: 2,
      text: "Ofrecemos atención médica de calidad",
    },
    {
      id: 3,
      text: "Expertos en cuidado de la salud",
    },
  ];

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex min-h-screen bg-[#141414] relative overflow-hidden">
      <div className="w-[567px] relative max-md:w-full max-sm:hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ac61fa97edfa5d67f292f8772bc2a6883c37f3"
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute bg-[#141414] opacity-90 inset-0" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/71655e4ebd314208598a257fd2e32c8533fb3cdc"
          alt=""
          className="w-full h-full absolute inset-0 opacity-[0.1]"
        />
        <div className="absolute left-12 top-9">Logo</div>

        <Carousel
          className="absolute w-full bottom-[120px]"
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="flex justify-center">
                <div className="text-center text-white text-[21px] leading-[27.3px] w-full max-w-[426px]">
                  {item.text}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[59px]">
          <CarouselIndicator
            count={carouselItems.length}
            activeIndex={currentSlide}
          />
        </div>
      </div>
      {children}
    </div>
  );
};
