/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-sarif'],
        Raleway: ['Raleway', 'sans-sarif'],
        Poppins: ['Poppins', 'sans-sarif'],
        VarelaRound: ['Varela Round', 'sans-sarif'],
        Outfit: ['Outfit', 'sans-sarif']
      },
      colors: {
        sage: {
          DEFAULT: '#76a699',
          light: '#7bb8a7'
        },
        charcoal: '#45505b'
      },
      boxShadow: {
        teal: '0 0 15px rgba(20,184,166,0.15)'
      }
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      'custom-md': '900px',
      lg: '1024px',
      'custom-lg': '1200px'
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        xs: '2rem',
        sm: '2rem',
        md: '5rem',
        'custom-md': '5rem',
        lg: '5rem',
        'custom-lg': '5rem'
      },
      center: true
    }
  },
  plugins: []
}
