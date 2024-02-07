import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#e7816b",
        secondary: "#ffad9b",
        lightgray: "hsl(210, 17%, 95%)",
        darkgray: "hsl(264, 5%, 20%)",
      },

      fontFamily: {
        jost: ['"Jost"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
