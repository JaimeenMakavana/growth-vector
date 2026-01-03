import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors with opacity support using RGB channels
        rose: {
          50: "rgb(253 242 248 / <alpha-value>)",
          100: "rgb(252 231 243 / <alpha-value>)",
          200: "rgb(251 207 232 / <alpha-value>)",
          300: "rgb(249 168 212 / <alpha-value>)",
          400: "rgb(244 114 182 / <alpha-value>)",
          500: "rgb(244 63 94 / <alpha-value>)",
          600: "rgb(225 29 72 / <alpha-value>)",
          800: "rgb(159 18 57 / <alpha-value>)",
        },
        gray: {
          50: "rgb(249 250 251 / <alpha-value>)",
          100: "rgb(243 244 246 / <alpha-value>)",
          200: "rgb(229 231 235 / <alpha-value>)",
          400: "rgb(156 163 175 / <alpha-value>)",
          500: "rgb(107 114 128 / <alpha-value>)",
          600: "rgb(75 85 99 / <alpha-value>)",
          700: "rgb(55 65 81 / <alpha-value>)",
          900: "rgb(17 24 39 / <alpha-value>)",
        },
        orange: {
          500: "rgb(249 115 22 / <alpha-value>)",
        },
        blue: {
          500: "rgb(59 130 246 / <alpha-value>)",
          600: "rgb(37 99 235 / <alpha-value>)",
        },
        green: {
          500: "rgb(34 197 94 / <alpha-value>)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-primary": "var(--bg-primary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      zIndex: {
        base: "var(--z-base)",
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        "modal-backdrop": "var(--z-modal-backdrop)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
        slower: "700ms",
      },
      transitionTimingFunction: {
        default: "var(--easing-default)",
        smooth: "var(--easing-smooth)",
      },
    },
  },
  plugins: [],
};

export default config;
