/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E23744",
        secondary: "#1C1C1C",
        accent: "#FF6B35",
        surface: "#FFFFFF",
        background: "#F8F8F8",
        success: "#48A14D",
        warning: "#FFB800",
        error: "#D32F2F",
        info: "#2196F3",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        bounce: "bounce 0.6s ease-in-out",
        pulse: "pulse 1s ease-in-out infinite",
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'modal': '0 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}