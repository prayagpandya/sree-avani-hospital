export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        plum: {
          900: '#241B2D',
          800: '#32105F',
          700: '#42167A',
          600: '#541A85',
          500: '#6B2BA3',
          200: '#D9C7EC',
          100: '#F5F0FA',
        },
        gold: {
          700: '#A87A1E',
          600: '#C99A32',
          400: '#E6C66A',
          200: '#F0E0B8',
        },
        ivory: '#FCF9F4',
        champagne: '#F7EFE3',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -18px rgba(36, 27, 45, 0.25)',
        lift: '0 24px 60px -24px rgba(50, 16, 95, 0.35)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
