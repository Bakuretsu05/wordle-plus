import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#E3E3E1",
        secondary: "#121213",
      },
      colors: {
        "wordle-yellow": "#B59F3A",
        "wordle-green": "#538D4E",
        "wordle-gray": "#3A3A3C",
        primary: "#3A3A3C",
      },
    },
  },
  plugins: [],
};
export default config;
