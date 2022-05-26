module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
      colors: {
        primary: '#3366f6',
        secondary: '#ffc871',
        neutral: '#333333',
      },
    },
  },
  plugins: [],
};
