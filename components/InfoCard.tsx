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
    <div className="flex flex-col items-center max-w-sm">
      <div
        className="w-[220px] h-[300px] bg-no-repeat"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <h3 className="text-2xl">{title}</h3>
      <p
        className={`${montserrat.className} text-base font-semibold mt-2 text-center`}
      >
        {description}
      </p>
    </div>
  );
}
