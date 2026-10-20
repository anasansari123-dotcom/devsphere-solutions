/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        navy: "#0a0f1c",
        brand: { 300: "#7dd3fc", 400: "#38bdf8", 500: "#1e90ff", 600: "#2563eb", 700: "#1d4ed8" },
      },
      fontFamily: { sans: ["var(--font-sans)"], serif: ["var(--font-serif)", "Georgia", "serif"] },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 40s linear infinite" },
    },
  },
  plugins: [],
};
