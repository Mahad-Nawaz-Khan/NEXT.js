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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3490dc", 
        secondary: "#ffed4a", 
        danger: "#e3342f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        128: "32rem", 
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem", 
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("@tailwindcss/typography"), 
  ],
};

export default config;
