/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section-1': '#E2D03E',
        'section-2': '#4DAE85',
        'section-3': '#ED5D53',
        'section-4': '#4A90E2',
      },
    },
  },
  plugins: [],
}