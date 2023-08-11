/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        login: "url('/assets/login_back.png')"
      })
    }
  },
  plugins: []
}
