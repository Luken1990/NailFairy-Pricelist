/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#E8B4B8',
        secondary: '#67595E',
        base: '#EED6D3',
        text: '#67595E',
      },
    },
  },
  plugins: [],
};
