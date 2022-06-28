module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Rokkitt", "serif"],
    },
    screens: {
      xs: "320px",
      s: "485px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primaryAccent: "#2EC4B6",
        offBlack: "#1F0322",
        offWhite: "#FFFAFA",
      },
    },
  },
  plugins: [],
};
