/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pause': 'animation-play-state: paused;'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
