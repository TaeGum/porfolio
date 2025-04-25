import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c0c0c",
        accent: "#ffc9f0",
        accent2: "#9ddcff",
        accent3: "#ffe68c",
        accent4: "#f072cd",
        accent5: "#e5c141",
        accent6: "#5ab5e8",
        accent7: "#7cf072",
        grayText: "#706f6f",
      },
      fontFamily: {
        handlee: ['Handlee', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: "1px 1px 11.2px 0px rgba(0,0,0,0.08)",
        strong: "3px 3px 12px 0px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl: "26.85px",
        md: "8px",
        card: "6px",
      }
    }
  },
  plugins: [],
};

export default config;
