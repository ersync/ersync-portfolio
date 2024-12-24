/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-sarif'],
        Raleway: ['Raleway', 'sans-sarif'],
        Poppins: ['Poppins', 'sans-sarif'],
        VarelaRound: ['Varela Round', 'sans-sarif']
      },
      colors: {
        sage: {
          DEFAULT: '#76a699',
          light: '#7bb8a7'
        },
        charcoal: '#45505b'
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },

    }
  },
  plugins: []
}
