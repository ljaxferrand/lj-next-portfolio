module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        primaryAccent: "#3A606E",
        primaryDarker: "#1C2E35",
        secondaryAccent: "#828E82",
        tertiaryAccent: "#BBDBCC",
        darkestAccent: "#111827",
        offBlack: "#0b0b0d",
        offWhite: "#dedcdc",
        lightGrey: "#848FA5",
        yellowBG: "#E7BB41",
      },
    },
  },
  plugins: [],
};
