module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',  // Vert forêt
          content: '#ffffff',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2D5A27",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
}
