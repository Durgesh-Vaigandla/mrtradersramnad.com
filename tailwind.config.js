/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "maroon": "#800000",
        "primary-container": "#630d16",
        "secondary": "#705955",
        "background": "#fcf9f5",
        "surface": "#fcf9f5",
        "surface-container-low": "#f6f3ef",
        "on-background": "#1c1c1a",
        "on-primary": "#ffffff",
        "outline-variant": "#dcc0bf",
      },
      fontFamily: {
        "headline": ["Noto Serif"],
        "body": ["Manrope"],
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      boxShadow: {
        "premium": "0 12px 40px rgba(65, 0, 7, 0.06)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
