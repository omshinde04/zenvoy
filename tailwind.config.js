/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  safelist: [
    // Template classes that get purged because they are dynamic
    // We will add specific ones here as templates are added
    "w-[794px]",
    "min-h-[1123px]",
    "h-[1123px]",
  ],
  theme: {
    extend: {
      // Zenvoy global brand only
      colors: {
        brand: {
          navy: "#0F172A",
          indigo: "#6366F1",
          white: "#FFFFFF",
          gray: "#6B7280",
          light: "#F8FAFC",
          border: "#E5E7EB",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      // Global spacing for app pages only
      // Templates manage their own spacing inline
    },
  },
  plugins: [],
}