/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins : ['poppins', 'sans-serif'],
      },    
      colors: {
        'primary': '#6153Cd',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          // sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}

