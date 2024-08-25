/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'left-frame': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'right-frame': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out-top': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
      },
    },
      animation: {
        'fader-in': 'fade-in 4s ease-out forwards',
        'left-frame': 'left-frame 2s ease-out forwards',
        'right-frame': 'right-frame 2s ease-out forwards',
        'slide-in-top': 'slide-in-top 2s ease-out forwards',
        'slide-out-top': 'slide-out-top 2s ease-out forwards',
        'slide-in-bottom': 'slide-in-bottom 2s ease-out forwards',
        'section': 'slide-in-bottom 1s ease-out forwards', // You can add your custom animations here
      },
    },
  },
  plugins: [],
};
