module.exports = {
  purge: {
    enabled: true,
    content: ['webdashboard/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 200px) { ... }

      'md': '500px',
      // => @media (min-width: 500px) { ... }

      'lg': '900px',
      // => @media (min-width: 900px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
