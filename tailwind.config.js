/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        grey:'#DDDDDD',
        blue: '#B1EEEB',
        yellow: '#FFFD99',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'pressStart': ['pressStart', 'serif'],
        'aoMono': ['aoMono', 'monospace'],
      },
    },
  },
  plugins: [],
};
