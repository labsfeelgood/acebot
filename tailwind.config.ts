import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF1A2D",
      },
      dropShadow: {
        "3xl": "0 4px 40px rgba(255, 26, 45, 1)",
      },
      backgroundImage: {
        "play-button":
          "linear-gradient(93.98deg, #FF1A2D 53.84%, #FCD415 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
