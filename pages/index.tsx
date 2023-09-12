import {
  FooterEtherscan,
  FooterGitbook,
  FooterTelegram,
  FooterTwitter,
  HeroAceBotLogo,
  HeroAceText,
  HeroBotText,
  Logo,
  NavGitbook,
  NavTelegram,
  NavTwitter,
  PlayTelegram,
} from "@/components/Assets";
import { FAQs } from "@/components/FAQs";
import { GameCard } from "@/components/GameCard";
import { InfoCard } from "@/components/InfoCard";
import { useMicrogrammaFont } from "@/hooks/useMicrogrammaFont";
import { useMontserratFont } from "@/hooks/useMontserratFont";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

const GAMES = [
  { bgImage: "/game-dice.svg", gameName: "DICE", disabled: true },
  { bgImage: "/game-coinflip.svg", gameName: "COIN FLIP", disabled: false },
  { bgImage: "/game-roulette.svg", gameName: "ROULETTE", disabled: true },
];

const INFOS = [
  {
    imgSrc: "/polygon.svg",
    title: "POLYGON",
    description: "Currently on Polygon with more chains launching soon..",
  },
  {
    imgSrc: "/house-edge.svg",
    title: (
      <>
        <span className="text-black">4%</span> HOUSE EDGE
      </>
    ),
    description: "2% of this will be give to our holders. Be active, anon!",
  },
  {
    imgSrc: "/your-keys.svg",
    title: (
      <>
        <span className="text-black">YOUR KEYS,</span> YOUR C...
      </>
    ),
    description:
      "We do not store your wallet keys so please keep them carefully with you!",
  },
];

const FAQS = [
  {
    ques: "Wtf is this?",
    answ: "AceBot is a casion on Telegram that is fair, fun, and rewarding!",
  },
  {
    ques: "How do I play?",
    answ: "Get on the Telegram bot and setup your wallet. You'll be up in no time!",
  },
  {
    ques: "What about my wallet Private Keys and Seed Phrase?",
    answ: "Private keys are encrypted using industry standard encryption. No one has access to it. Not on our server, database, or stored on website, or anywhere we are aware of!",
  },
  {
    ques: "What do I need to play?",
    answ: "You'll need $MATIC on the Polygon network to start playing. Easy!",
  },
  {
    ques: "What's the revenue share?",
    answ: "AceBot takes 4% as the house edge, and 50% of this (2% total) revenue would be distributed amongst our holders in proportion to their holdings of $ACE",
  },
];

export default function Home() {
  const { microgramma } = useMicrogrammaFont();
  const { montserrat } = useMontserratFont();

  return (
    <>
      <Head>
        <title>AceBot - a casino on Telegram</title>
      </Head>
      <main
        className={`${microgramma.className} max-w-screen-2xl m-auto mb-16 relative overflow-hidden`}
      >
        <div
          className="bg-[url('/hero-pattern.svg')] bg-no-repeat flex flex-col pb-32 max-[640px]:pb-8"
          style={{
            backgroundSize: "1311.36px 1439px",
            backgroundPositionY: "-366.06px",
            backgroundPositionX: "center",
          }}
        >
          <nav className="flex items-center py-4 px-5 z-10">
            <Logo className="max-[640px]:w-[32px]" />
            <a
              target="_blank"
              href="/"
              className="text-2xl max-[640px]:text-base ml-2"
            >
              ACEBOT
            </a>

            <ul className="ml-auto flex items-center gap-5 max-[640px]:gap-2">
              <li>
                <a target="_blank" href="">
                  <NavTwitter className="max-[640px]:w-[20px]" />
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  <NavTelegram className="max-[640px]:w-[20px]" />
                </a>
              </li>
              <li>
                <a target="_blank" href="">
                  <NavGitbook className="max-[640px]:w-[20px]" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center -mt-28 max-[640px]:-mb-16">
            <HeroAceText />
            <HeroAceBotLogo className="max-[640px]:h-[300px]" />
            <HeroBotText />
          </div>

          {/* H1 Text */}

          <h1 className="text-center text-3xl max-[640px]:text-xl m-auto drop-shadow-3xl -mt-4">
            A <span className="text-primary">CASINO</span> ON TELEGRAM
          </h1>

          <a
            target="_blank"
            href=""
            className="m-auto flex items-center justify-center rounded-full mt-6 w-40 max-[640px]:w-32 h-11 max-[640px]:h-9 gap-2 text-xl max-[640px]:text-sm bg-play-button"
          >
            PLAY <PlayTelegram className="max-[640px]:w-[20px]" />
          </a>

          <p
            className={`m-auto ${montserrat.className} text-base mt-3 font-semibold max-[640px]:text-xs max-[640px]:text-center`}
          >
            <span className="text-primary">
              Play now to reserve your airdrop -{" "}
            </span>{" "}
            token soon!
          </p>
        </div>

        {/* Games */}

        <div className="flex flex-wrap gap-12 max-[640px]:gap-8 items-center justify-center left-0 right-0 -mt-20 max-[640px]:mt-0 absolute max-[640px]:static max-[640px]:px-8">
          {GAMES.map((game) => (
            <GameCard key={game.gameName} {...game} />
          ))}
        </div>

        {/* Center */}

        <div className="bg-[url('/plus-pattern.svg')] bg-no-repeat flex flex-col pt-44 max-[640px]:pt-4 pb-24 max-[640px]:pb-8">
          <div className="flex my-40 max-[640px]:my-8 flex-wrap max-[640px]:px-4">
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="text-primary text-4xl max-[640px]:text-xl text-left max-[640px]:text-center drop-shadow-3xl w-[32rem] max-[640px]:w-full">
                REVENUE SHARING
              </h2>

              <p className="max-w-lg max-[640px]:max-w-none text-2xl max-[640px]:text-sm text-left max-[640px]:text-center mt-6 max-[640px]:my-4">
                <span className="text-primary">50%</span> revenue shared with
                our holders! We flip together fam
              </p>
            </div>

            <Image
              loading="lazy"
              src="/revenue-sharing.svg"
              alt=""
              width={600}
              height={350}
            />
          </div>

          <div className="flex flex-wrap-reverse max-[640px]:px-4">
            <Image
              loading="lazy"
              src="/provably-fair.svg"
              alt=""
              width={600}
              height={350}
            />

            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="text-primary text-4xl max-[640px]:text-xl text-left max-[640px]:text-center drop-shadow-3xl w-[32rem] max-[640px]:w-full">
                PROVABLY FAIR
              </h2>

              <p className="max-w-lg max-[640px]:max-w-none text-2xl max-[640px]:text-sm text-left max-[640px]:text-center mt-6 max-[640px]:my-4">
                ain&apos;t nobody gonna cheat and shit (ChainLink VRF)
              </p>
            </div>
          </div>
        </div>

        {/* Infos */}

        <div className="bg-primary bg-[url('/box-pattern.svg')] bg-no-repeat p-16 max-[640px]:p-8 flex items-center flex-wrap justify-center gap-20 max-[640px]:gap-12">
          {INFOS.map((info) => (
            <InfoCard key={info.imgSrc} {...info} />
          ))}
        </div>

        {/* FAQs */}

        <div className="flex flex-col px-8 py-12 relative">
          <div className="bg-[url('/dot-pattern.svg')] bg-no-repeat w-28 max-[640px]:w-24 h-72 absolute right-24 top-20" />

          <div className="text-2xl flex items-center gap-4">
            <Image
              loading="lazy"
              src="/faq-curve.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="drop-shadow-3xl">FAQS</h3>
          </div>

          {FAQS.map((faq) => (
            <Fragment key={faq.ques}>
              <FAQs {...faq} />
              <div className="max-w-5xl overflow-hidden">
                <Image
                  loading="lazy"
                  src="/footer-top-border.svg"
                  alt=""
                  width={1000}
                  height={4}
                />
              </div>
            </Fragment>
          ))}

          <FAQs
            hideAnswImg={true}
            ques="Wen token?"
            answ={
              <Image
                loading="lazy"
                src="meme.svg"
                alt=""
                width={230}
                height={230}
                className="rounded-md"
              />
            }
          />
        </div>

        {/* Footer */}

        <div className="overflow-hidden px-2">
          <Image
            loading="lazy"
            src="/footer-top-border.svg"
            alt=""
            width={1500}
            height={4}
          />
        </div>

        <footer className="flex max-[640px]:items-center max-[640px]:justify-center max-[640px]:text-center text-primary max-[640px]:gap-4 max-[640px]:text-base text-lg px-8 py-12 flex-wrap">
          MADE BY DEGENS AND SAVVY DEVS 🍼
          <ul className="ml-auto max-[640px]:ml-0 flex items-center gap-5">
            <li>
              <a target="_blank" href="">
                <FooterEtherscan />
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <FooterTwitter />
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <FooterTelegram />
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                <FooterGitbook />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
}
