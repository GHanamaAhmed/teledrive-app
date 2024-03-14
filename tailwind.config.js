/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#344054',
        high: '#101828',
        low: '#98A2B3',
        dispaly: '#D0D5DD',
        oncolor: '#FCFCFD',
        primary: '#1570EF'
      },
      fontFamily: {
        Poppins: 'Poppins'
      }
    }
  },
  plugins: []
}
