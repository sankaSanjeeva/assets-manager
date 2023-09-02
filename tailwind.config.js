/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      blue: {
        DEFAULT: '#5454FB',
      },
    }),
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        bubble: {
          '0%': {
            'border-radius': '35% 65% 65% 35% / 56% 49% 51% 44%',
          },
          '50%': {
            'border-radius': '51% 49% 29% 71% / 21% 29% 71% 79%',
          },
          '100%': {
            'border-radius': '35% 65% 65% 35% / 56% 49% 51% 44%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        bubble: 'bubble 10s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
