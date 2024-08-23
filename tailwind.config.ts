import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color-900)",
        mainColor: {
          900: "var(--main-color-900)",
          800: "var(--main-color-800)",
          700: "var(--main-color-700)",
          600: "var(--main-color-600)",
        },
        primaryColor: {
          900: "var(--primary-color-900)",
          800: "var(--primary-color-800)",
          700: "var(--primary-color-700)",
          600: "var(--primary-color-600)",
          500: "var(--primary-color-500)",
          400: "var(--primary-color-400)",
          300: "var(--primary-color-300)",
          200: "var(--primary-color-200)",
          100: "var(--primary-color-100)",
          50: "var(--primary-color-50)",
        },
        lightColor: {
          900: "var(--light-color-900)",
          800: "var(--light-color-800)",
          700: "var(--light-color-700)",
          600: "var(--light-color-600)",
          500: "var(--light-color-500)",
          400: "var(--light-color-400)",
        },
        darkColor: {
          900: "var(--dark-color-900)",
          800: "var(--dark-color-800)",
          700: "var(--dark-color-700)",
          600: "var(--dark-color-600)",
          500: "var(--dark-color-500)",
          400: "var(--dark-color-400)",
          300: "var(--dark-color-300)",
          200: "var(--dark-color-200)",
          100: "var(--dark-color-100)",
          50: "var(--dark-color-50)",
          40: "var(--dark-color-40)",
          30: "var(--dark-color-30)",
          20: "var(--dark-color-20)",
        },
        cardColor: {
          900: "var(--card-color-900)",
          800: "var(--card-color-800)",
          700: "var(--card-color-700)",
          600: "var(--card-color-600)",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
