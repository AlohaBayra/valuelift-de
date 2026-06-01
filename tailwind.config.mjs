/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#015FA3',
          blueLight: '#4A90E2',
          dark: '#111111',
          black: '#000000',
          white: '#FFFFFF',
          lightBg: '#F9F7F7',
          gray: '#5F5F5F',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
};
