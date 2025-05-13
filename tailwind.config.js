/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E30613',
          dark: '#C00000',
          light: '#FF3B44',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#333333',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'product': '0 4px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

