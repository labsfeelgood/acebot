import { useMontserratFont } from "@/hooks/useMontserratFont";
import Image from "next/image";
import { ReactNode } from "react";

type InfoCardProps = {
  imgSrc: string;
  title: ReactNode;
  description: ReactNode;
};

export function InfoCard({ imgSrc, title, description }: InfoCardProps) {
  const { montserrat } = useMontserratFont();

  return (
    <div className="flex flex-col items-center max-w-sm max-[640px]:text-center">
      <div
        className="w-[220px] max-[640px]:w-[160px] h-[300px] max-[640px]:h-[200px] bg-no-repeat max-[640px]:bg-contain"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <h3 className="text-2xl max-[640px]:text-xl">{title}</h3>
      <p
        className={`${montserrat.className} text-base max-[640px]:text-sm font-semibold mt-2 text-center`}
      >
        {description}
      </p>
    </div>
  );
}
