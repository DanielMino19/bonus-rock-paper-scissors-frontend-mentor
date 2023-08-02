/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'scissors-gradient-start': 'hsl(39, 89%, 49%)',
        'scissors-gradient-end': 'hsl(40, 84%, 53%)',
        'paper-gradient-start': 'hsl(230, 89%, 62%)',
        'paper-gradient-end': 'hsl(230, 89%, 65%)',
        'rock-gradient-start': 'hsl(349, 71%, 52%)',
        'rock-gradient-end': 'hsl(349, 70%, 56%)',
        'lizard-gradient-start': 'hsl(261, 73%, 60%)',
        'lizard-gradient-end': 'hsl(261, 72%, 63%)',
        'cyan-start': 'hsl(189, 59%, 53%)',
        'cyan-end': 'hsl(189, 58%, 57%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
      },
    },
  },
  plugins: [],
}

