import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1020",
        card: "#121a31",
        border: "#26314f",
        accent: "#7c9cff",
        accent2: "#7be0c6",
        text: "#e9edf8",
        muted: "#98a5cd"
      },
      boxShadow: {
        premium: "0 10px 40px rgba(11,16,32,.25)",
        soft: "0 4px 20px rgba(11,16,32,.15)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
