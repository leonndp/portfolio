module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["'Orbitron'", "sans-serif"],
        audiowide: ["'Audiowide'", "cursive"],
      },
      height: {
        "66vh": "66vh",
      },
      inset: {
        "1/6": "8.33333333%",
        17: "68px",
        26: "104px",
      },
      zIndex: {
        "-50": "-50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};
