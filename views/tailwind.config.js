/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/card.html'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        '3xl': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '4xl': 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
        '5xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
      fontFamily: {
        'sans': ["Poppins"],
      }
    },
  },
  plugins: [],
}

