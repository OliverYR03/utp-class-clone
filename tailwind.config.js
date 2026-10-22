/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "aside-menu": "#011633",
      },
      fontFamily: {
        'AdobeRegular': ['AdobeCleanRegular', 'sans-serif'],
        'LatoRegular': ['LatoRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
