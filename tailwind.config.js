/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0F1626',
        secondary: '#393A47',
        accent: '#F13024',
        sub: '#0CC7AB',
      },
      backgroundImage: {
        bgHome: 'url("/images/bgHome.jpg")',
        circleStar: 'url("/icons/circle-star.svg")',
        bgLayout: 'url("/icons/bgLayout.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
};
