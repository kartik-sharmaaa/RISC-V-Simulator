/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./templates/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        glass: 'rgba(255,255,255,0.05)'

      }
    },
  },
  plugins: [],
};
