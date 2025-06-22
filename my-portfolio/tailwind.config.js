export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#101625',
        brand: { DEFAULT: '#18e8ff', dark: '#12c5db' },
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      backgroundImage:{
        'hero-dots':"radial-gradient(circle at 20% 30%,#18e8ff22 0,transparent 50%),radial-gradient(circle at 80% 25%,#18e8ff11 0,transparent 50%),radial-gradient(circle at 50% 80%,#18e8ff22 0,transparent 50%)",
      },

    },
    container:{ center:true, padding:'1rem' },
  },
  plugins: [],
};
