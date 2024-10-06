/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#0e1317",
        "light-dark": "#191f25",
        primary: "#FC4100",
      },
      colors: {
        dark: "#0e1317",
        "light-dark": "#191f25",
        primary: "#FC4100",
      },
      borderColor: {
        dark: "#0e1317",
        "light-dark": "#191f25",
        primary: "#FC4100",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ]
};
