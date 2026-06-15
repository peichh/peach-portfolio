import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "var(--font-kanit)", "sans-serif"],
        thai: ["var(--font-kanit)", "sans-serif"],
      },
      colors: {
        background: "#f9f2e2", // Light cream
        primary: "#27695e",    // Deep forest/teal
        muted: "#57836f",      // Muted forest
        "muted-light": "#839d84",
        accent: "#acb89f",
        "accent-light": "#d4d4be"
      },
    },
  },
  plugins: [],
};
export default config;