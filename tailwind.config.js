/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  safelist: [
    "w-[794px]",
    "min-h-[1123px]",
    "h-[1123px]",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",
          indigo: "#6366F1",
          violet: "#4F46E5",
          white: "#FFFFFF",
          slate: "#1E293B",
          gray: "#64748B",
          light: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        hover: "0 20px 40px -15px rgba(99, 102, 241, 0.12), 0 0 0 1px rgba(99, 102, 241, 0.2)",
      },
    },
  },
  plugins: [],
}
