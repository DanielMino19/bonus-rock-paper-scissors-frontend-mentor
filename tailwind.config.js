/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          'dark-text': 'hsl(229, 25%, 31%)',
          'score-text': 'hsl(229, 64%, 46%)',
          'header-outline': 'hsl(217, 16%, 45%)',
        },
      },
      fontFamily: {
        'barlow-semi-condensed': ['"Barlow Semi Condensed"', 'sans-serif'],
      }
    },
  plugins: [],
  }
}
