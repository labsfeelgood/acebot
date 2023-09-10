import { ReactNode } from "react";
import Image from "next/image";
import { useMontserratFont } from "@/hooks/useMontserratFont";

type FAQsProps = {
  ques: ReactNode;
  answ: ReactNode;
  hideAnswImg?: boolean;
};

export function FAQs({ ques, answ, hideAnswImg }: FAQsProps) {
  const { montserrat } = useMontserratFont();

  return (
    <div
      className={`max-w-5xl flex flex-col py-8 gap-4 ${montserrat.className}`}
    >
      <p className="text-primary flex gap-2 items-center text-xl max-[640px]:text-lg">
        <Image src="/question.svg" alt="" width={40} height={40} /> {ques}
      </p>
      <p className="flex gap-2 items-center font-semibold text-lg max-[640px]:text-base">
        <Image
          src="/answer.svg"
          alt=""
          width={40}
          height={40}
          style={hideAnswImg ? { visibility: "hidden" } : {}}
        />
        {answ}
      </p>
    </div>
  );
}
