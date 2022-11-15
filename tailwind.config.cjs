/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1080px",
      },
    },
    extend: {
      colors: {
        "biru-logo": "#2b558e",
        "hejo-logo": "#0da35c",
      },
    },
  },
  plugins: [],
};
