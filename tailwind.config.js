module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      s: "485px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        heading: ["Rokkitt", "serif"],
      },
      colors: {
        primaryAccent: "#8A1C7C",
        secondaryAccent: "#0e6ba8",
        tertiaryAccent: "#BBDBCC",
        offBlack: "#1F0322",
        offWhite: "#FFFAFA",
        lightGrey: "#848FA5",
      },
    },
  },
  plugins: [],
};
