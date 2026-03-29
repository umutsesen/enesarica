/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#EDF2EE',
          200: '#D5E0D7',
          300: '#B0C7B4',
          400: '#8AAF90',
          500: '#6B8F71',
          600: '#557259',
          700: '#445A47',
          800: '#38493B',
          900: '#2F3D32',
        },
        forest: {
          800: '#1E3A2B',
          900: '#152C1F',
        },
        sand: {
          50: '#FAFAF6',
          100: '#F5F3EE',
          200: '#EBE7E0',
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
