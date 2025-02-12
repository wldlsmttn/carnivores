module.exports = {
  content: [
    "./*.html",  // pour cibler tous les fichiers HTML à la racine
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5A27",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }
}
