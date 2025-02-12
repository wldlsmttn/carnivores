module.exports = {
  content: [
    "./**/*.html",  // Ceci va chercher tous les fichiers HTML dans tous les dossiers
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
