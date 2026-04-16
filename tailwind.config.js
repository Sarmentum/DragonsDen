/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0d0f',
        slateDeep: '#11171d',
        algae: '#8fffc2',
        algaeSoft: '#5ee5a3'
      },
      boxShadow: {
        algae: '0 0 35px rgba(95, 230, 165, 0.35)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
