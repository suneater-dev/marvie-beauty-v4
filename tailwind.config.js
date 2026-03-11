/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#475161",
          50: "#F4F5F7",
          100: "#E8EAED",
          200: "#C5CAD1",
          300: "#A2AAB5",
          400: "#5C6D7D",
          500: "#475161",
          600: "#3D4553",
          700: "#2E3440",
          800: "#21262E",
          900: "#161A1F",
        },
        accent: {
          DEFAULT: "#D9C7B0",
          50: "#FBF9F6",
          100: "#F5F0E9",
          200: "#EDE3D5",
          300: "#E3D4BF",
          400: "#D9C7B0",
          500: "#C9B08E",
          600: "#B8976A",
          700: "#9A7B52",
          800: "#72593B",
          900: "#4A3A26",
        },
        bg: "#FAF9F7",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#333333",
          muted: "#858D93",
          light: "#A8ADB3",
        },
        border: {
          DEFAULT: "#E8E5E0",
          light: "#F0EDE8",
        },
      },
      fontFamily: {
        sans: ["Jost", "system-ui", "sans-serif"],
        display: ["Zagora", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(71, 81, 97, 0.08), 0 10px 20px -2px rgba(71, 81, 97, 0.04)",
        "soft-lg": "0 10px 40px -10px rgba(71, 81, 97, 0.12), 0 4px 6px -2px rgba(71, 81, 97, 0.05)",
        "soft-xl": "0 20px 60px -15px rgba(71, 81, 97, 0.15)",
        glass: "0 8px 32px rgba(71, 81, 97, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-up-delay": "fadeUp 0.7s ease-out 0.15s forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
