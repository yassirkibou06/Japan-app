/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sml: ['16px', 'auto'],
        sm: ['24px', 'auto'],
        base: ['34px', 'auto'],
        lg: ['48px', 'auto'],
        xl: ['62px', 'auto'],
      },
      screens: {
        sml: '360px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      colors: {
        'black': '#000000',
        'orange': '#F15C07',
        'white': '#ffffff',
        'sky': '#55A6C4',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
