/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: {
    cream: '#FAF8F3', forest: '#2F6B3F', lime: '#9BCB4B', earth: '#6B4F3A',
    sand: '#EFE8D8', sky: '#4A90B8', harvest: '#D9A441', rust: '#B5473A'
  }, fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, boxShadow: { soft: '0 12px 40px rgba(44,64,43,.08)' } } },
  plugins: []
};
