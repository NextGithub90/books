/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B0014',
          purple: '#6D28D9',
          pink: '#EC4899',
          accent: '#8B5CF6'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://assets.codepen.io/1462889/pattern-dark.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
