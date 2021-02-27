module.exports = {
  purge: ["./dist/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/forms")],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  }
};
