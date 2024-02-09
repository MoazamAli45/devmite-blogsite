module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "13rem",
        },
      },
      colors: {
        gray: "#808080",
        black: "#000000",
        "gray-light": "#B4B4B4",
        green: "#649130",
      },
      screens: {
        "custom-md": "990px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
