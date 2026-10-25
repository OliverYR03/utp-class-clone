/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "aside-menu": "#011633",
        "back-class": "#eff6ff",
        "gris-semanal": "#161616",
        "cyan-new" : "#0071bf",
      },
      fontFamily: {
        'AdobeRegular': ['AdobeCleanRegular', 'sans-serif'],
        'LatoRegular': ['LatoRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
