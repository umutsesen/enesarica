/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#FAF7F5',
          100: '#F4EEEB',
          200: '#E7D8D1',
          300: '#D1B7AC',
          400: '#BB9788',
          500: '#A36C56',
          600: '#854936',
          700: '#75402F',
          800: '#643729',
          900: '#513027',
        },
        forest: {
          800: '#3B3531',
          900: '#292522',
        },
        sand: {
          50: '#F8F6F3',
          100: '#F1EEEA',
          200: '#E5DFD9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
