/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'Barlow':  ['Barlow', 'serif'],
        'Fraunces': ['Fraunces', 'serif'], 
      }
    },
    colors: {
      'red':{
        100: 'hsl(7, 99%, 70%)',
      },
      'white': '#ffffff',
      'yellow':'hsl(51, 100%, 49%)',
      'cyan':{
        100: 'hsl(167, 40%, 24%)',
        200: 'hsl(168, 34%, 41%)',
        300: '#90d4c5'
      } ,
      'blue':{
        100: 'hsl(210, 4%, 67%)',
        200: 'hsl(213, 9%, 39%)',
        300: 'hsl(232, 10%, 55%)',
        400: 'hsl(198, 62%, 26%)',
        500: 'hsl(212, 27%, 19%)',
      } , 
    },
  },
  plugins: [],
}

