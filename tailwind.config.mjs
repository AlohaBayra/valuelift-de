/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:     '#F5A623',  // Haupt-Accent: Orange/Amber
          blueLight:'#FAC03A',  // Hover: helleres Orange
          dark:     '#0B1528',  // Hintergrund: dunkles Navy
          black:    '#000000',
          white:    '#FFFFFF',
          lightBg:  '#F9F7F7',
          gray:     '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Montserrat', 'sans-serif'],
      },
    },
  },
};
