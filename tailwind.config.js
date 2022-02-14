module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '3/2': '150%'
      },
      maxWidth: {
        'screen-aschehoug': '1200px'
      },
      colors: {
        'aschehoug-dark-blue': '#152935',
        'aschehoug-light-blue': '#3D7E80',
        'aschehoug-mid-blue': '#335253',
        'bg-light': '#F8F6EE',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}