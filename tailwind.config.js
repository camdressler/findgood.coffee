module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('./plugins/components')
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      back: "#1F232C",
      brown: {
        "100": "#ede0d4",
        "200": "#e6ccb2",
        "300": "#ddb892",
        "400": "#b08968",
        "500": "#9c6644",
        "600": "#7f5539",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};
