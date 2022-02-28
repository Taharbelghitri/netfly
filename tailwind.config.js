module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app.js"],
  theme: {
    colors: {
      black: "#0e0e0e",
      white: "#f4f4f4",
      green: "#0cca4a",
      red: "#cc2936",
      grey: "#82847c",
    },
    extend: {
      fontFamily: {
        josifin: ["Source Serif Pro"],
      },
      screens: {
        phone: "360px",
        tablet: "640px",
        laptop: "1100px",
        desktop: "1500px",
      },
    },
  },
  plugins: [],
};
