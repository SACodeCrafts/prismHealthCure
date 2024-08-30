/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2fc1ff',
        'hover-button': '#08acf2',
        'font-primary-color': '#101218',
        'font-secandary-color': '#4c5253',

      },
      boxShadow: {
        'custom-blue-sh': '0px 12px 16px -8px rgba(27, 95, 193, 0.38)',
      },
    },
  },
  plugins: [],
}
