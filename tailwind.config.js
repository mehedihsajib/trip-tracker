/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#96C291",
        "deep-green": "#74AF6E",
        light: "#F4EEEE",
        dark: "#333333",
        gray: "#444444",
        brown: "#FFDBAA",
      },
    },
  },
  plugins: [],
};
