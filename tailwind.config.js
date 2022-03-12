module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { container: {
    center: true,
    padding: "1rem",
    screens: {
      lg: "1024px",
      xl: "1024px",
      "2xl": "1124px",
    },
  },
  extend: {
    // backgroundImage: {
    //   'hero-white': "url('/assets/hero_white.png')",
    //   'hero-blue': "url('/assets/hero_blue.png')"
    // },
    fontFamily: {
      Alef: ["Alef", "sans-serif"],
      Catamaran: ["Catamaran", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
  }, extend: {},
  },
  plugins: [],
}
