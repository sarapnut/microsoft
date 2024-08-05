/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      '3xs': '200px',
      '2xs': '440px',

      'xs': '920px',
      
      'sm': '950px',
      // => @media (min-width: 640px) { ... }

      'md': '970px',
      // => @media (min-width: 768px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../img/Link-List-Icons-Surface-Devices (1).png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}

