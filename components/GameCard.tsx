type GameCardProps = {
  bgImage: string;
  disabled: boolean;
  gameName: string;
};

export function GameCard({ bgImage, disabled, gameName }: GameCardProps) {
  return (
    <div
      className="w-[424px] h-72 rounded-lg bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {disabled ? (
        <p className="flex flex-col w-full h-full items-center justify-center">
          <span className="text-3xl">{gameName}</span>
          <span className="text-xl text-primary">COMING SOON</span>
        </p>
      ) : (
        <a
          href=""
          className="bg-black text-xl absolute bottom-0 left-0 right-0 text-center p-4"
        >
          <span>{gameName} - </span>
          <span className="text-primary">PLAY NOW</span>
        </a>
      )}
    </div>
  );
}
