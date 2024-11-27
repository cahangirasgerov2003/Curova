/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "primary-color": "#FFCC4D",
        "secondary-color": "#ede8f5",
        "text-color": "#d3d9d4",
      },
      minHeight: {
        "dynamic-min-height": "calc(100vh)",
      },
    },
  },
  plugins: [],
};
