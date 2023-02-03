/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "1024px", //minimum supportable screen
      md: "1280px",
      lg: "1366px",
      xl: "1440px",
      xxl: "1680px",
    },
    extend: {
      colors: {
        pastel: {
          blue: "#80ABFF",
          purple: "#C399EF",
          green: "#A9E195",
          orange: "#FFBF80",
          red: "#FA8B8C",
        },
      },
    },
  },
};
