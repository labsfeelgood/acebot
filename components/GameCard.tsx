import Image from "next/image";

type GameCardProps = {
  bgImage: string;
  disabled: boolean;
  gameName: string;
};

export function GameCard({ bgImage, disabled, gameName }: GameCardProps) {
  return (
    <div
      className={`w-[424px] max-[640px]:w-[366px] h-72 max-[640px]:h-52 rounded-lg relative overflow-hidden ${
        disabled ? "max-[640px]:order-1" : "max-[640px]:order-none"
      }`}
    >
      <Image
        src={bgImage}
        alt=""
        width={424}
        height={288}
        className="absolute inset-0 -z-10"
        loading="eager"
      />

      {disabled ? (
        <p className="flex flex-col w-full h-full items-center justify-center">
          <span className="text-3xl max-[640px]:text-2xl">{gameName}</span>
          <span className="text-xl max-[640px]:text-sm text-primary">
            COMING SOON
          </span>
        </p>
      ) : (
        <a
          target="_blank"
          href="https://t.me/Fun_AceBot"
          className="bg-black text-xl max-[640px]:text-base absolute bottom-0 left-0 right-0 text-center p-4"
        >
          <span>{gameName} - </span>
          <span className="text-primary">PLAY NOW</span>
        </a>
      )}
    </div>
  );
}
