/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/renderer/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        MBlack: '#000000',
        MGrey: '#222222',
        MCyan: '#1DCD9F',
        MDCyan: '#169976'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
