const { colors, fonts } = require('./src/config/theme.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
      fontSize: {
        wordmark: ['9.375rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        heading: ['1.5rem', { lineHeight: '1.2' }],
        body: ['1rem', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        wordmark: '-0.03em',
      },
      lineHeight: {
        display: '1.2',
        body: '1.3',
      },
      keyframes: {
        // steps(1) timing gives the cursor a hard on/off blink instead of a fade
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
