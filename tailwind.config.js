/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#A8A8A8",
        bluebonnet: "#1921FA",
      },
    },
  },
  plugins: [],
};
