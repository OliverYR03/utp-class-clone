/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-lightt": "#e9f1fa",
      },
      fontFamily: {
        'AdobeRegular': ['AdobeCleanRegular', 'sans-serif'],
        'AdobeBold': ['AdobeCleanBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
