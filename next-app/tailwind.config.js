/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          50: '#fff9db',
          100: '#fff3bf',
          200: '#ffec99',
          300: '#ffe066',
          400: '#ffd43b',
          500: '#fcc419',
          600: '#fab005',
          700: '#f59f00',
          800: '#f08c00',
          900: '#e67700',
        },
        secondary: {
          50: '#e7f5ff',
          100: '#d0ebff',
          200: '#a5d8ff',
          300: '#74c0fc',
          400: '#4dabf7',
          500: '#339af0',
          600: '#228be6',
          700: '#1c7ed6',
          800: '#1971c2',
          900: '#1864ab',
        },
        bg: {
          light: 'white',
          dark: 'hsl(274, 4%, 16%)',
        },
        border: '#ccc',
        link: '#339af0',
        typography: {
          light: 'hsl(0, 0%, 25%)',
          dark: 'hsl(0, 0%, 98%)',
          primary: '#4A4A4A',
          secondary: '#9B9B9B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
