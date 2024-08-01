
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend:{
      colors:{
        back: {
          dark: '#000e1e',
          light: '#bfeaf7',
          lightMid: '#f0f9ff'
        },
        highlight: {
            DEFAULT: '#60a5fa',
            light: '#bfdbfe',
            dark: '#2563eb'
        }
      },
      outline: {
        main: '3px solid #60a5fa',
        light: '2px solid #60a5fa'
      },
       backgroundImage: {
        'darkbg': "url('/bg-darkened.png')",
        'lightbg': "url('/bg-lightened.png')"
      }
    },
    safelist: ['animate-[fade-in-up_3s_ease-in-out]']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}