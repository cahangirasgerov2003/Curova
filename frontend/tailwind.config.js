/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#ffffff",
        secondary: "#0a21c0",
        "text-color": "#d3d9d4",
        "text-color2": "#141619",
      },
      minHeight: {
        "dynamic-min-height": "calc(100vh)",
      },
    },
  },
  plugins: [],
};
