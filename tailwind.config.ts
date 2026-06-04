import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f4ef",
          100: "#e9e3d8",
          200: "#cfc5b4",
          500: "#675d50",
          700: "#2d2924",
          900: "#171411"
        },
        signal: {
          400: "#35b9a7",
          500: "#1f9a8d",
          600: "#14766d"
        },
        copper: {
          400: "#c98355",
          500: "#a95f37"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        fine: "0 24px 70px rgba(23, 20, 17, 0.08)"
      }
    },
  },
  plugins: [],
};

export default config;
