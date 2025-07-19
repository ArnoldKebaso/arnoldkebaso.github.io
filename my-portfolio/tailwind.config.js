export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#101625',
        surface: {
          DEFAULT: '#101625',
          light: '#1a2332',
          dark: '#0a0f1a',
        },
        brand: { 
          DEFAULT: '#18e8ff', 
          dark: '#12c5db',
          light: '#4aecff',
          glow: 'rgba(24, 232, 255, 0.5)',
        },
        accent: {
          purple: '#a855f7',
          pink: '#ec4899',
          orange: '#f97316',
        },
      },
      fontFamily: { 
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-dots': "radial-gradient(circle at 20% 30%,#18e8ff22 0,transparent 50%),radial-gradient(circle at 80% 25%,#18e8ff11 0,transparent 50%),radial-gradient(circle at 50% 80%,#18e8ff22 0,transparent 50%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 40% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 40% 80%, hsla(242,100%,70%,1) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(24, 232, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(24, 232, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(24, 232, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(24, 232, 255, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(24, 232, 255, 0.1)',
        'neon': '0 0 5px theme("colors.brand.DEFAULT"), 0 0 20px theme("colors.brand.DEFAULT"), 0 0 35px theme("colors.brand.DEFAULT")',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
    container: { center: true, padding: '1rem' },
  },
  plugins: [],
};
