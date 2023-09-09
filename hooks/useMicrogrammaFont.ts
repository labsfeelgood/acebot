import localFont from "next/font/local";

const microgramma = localFont({
  src: [
    { path: "../public/font/Microgramma-D-Extended-Bold.otf", weight: "700" },
  ],
});

export function useMicrogrammaFont() {
  return { microgramma };
}
