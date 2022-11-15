/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "black": "#363636",
      "purple": 'rgb(168 85 247)',
      "red": 'rgb(220 38 38)',
      "gray": "rgb(107 114 128)",
      'gray-lighter': 'rgb(209 213 219)',
      "indigo": 'rgb(129 140 248)',
      "white": "rgb(255 255 255)",
      'blue':'#8BB4D9',
      "transparent": "rgba(255, 0, 0, 0)",
      'blue-lighter': 'rgba(223,241,255,1)'
    },
  },
  plugins: []
}
