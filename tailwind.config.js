/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      responsive: ['clamp(32px, 8vw, 80px)', '1.1']
    },
    extend: {
      colors: {
        'midnight': '#1C0C32',
        'twilight': '#371761',
        'deepnight': '#0a0412',
        'deepPurple': '#8B4FD1'
      },
      keyframes: {
        otherBounce: {
          '0%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          }
        },
        fadeUp: {
          '0%': {
            transform: 'translatey(40px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translatey(0px)',
            opacity: '1'
          }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.2s ease-out',
        bounce: 'otherBounce 1s infinite'
      }
    },
  },
  plugins: [],
}
