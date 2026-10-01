import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        accent: "#9DFF20",
        "accent-dark": "#7acc1a",
        surface: "#111111",
        "surface-light": "#1a1a1a",
        border: "#252525",
        muted: "#737373",
      },
    },
  },
  plugins: [],
};

export default config;
