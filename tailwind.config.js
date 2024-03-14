/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#0000',
        white: '#ffffff',
        whitebg: '#fafafa',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bluestandart: '#3e86fa',
        blueold: '#0454D6',
      },
      fontFamily: {
        customTsel: ['Telkomsel Batik Sans Bold'],
        poppins: ['Poppins'],
      },
      fontFamily: {
        customFont: ['"telkomsel"', "Telkomsel Batik Sans Bold"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
