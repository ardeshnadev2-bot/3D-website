/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C6FF',
        secondary: '#7F00FF',
        accentGlow: '#00F5A0',
        darkBg: '#0A0A23',
        glassBg: 'rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-primary': '0 0 10px rgba(0, 198, 255, 0.5), 0 0 20px rgba(0, 198, 255, 0.3)',
        'neon-secondary': '0 0 10px rgba(127, 0, 255, 0.5), 0 0 20px rgba(127, 0, 255, 0.3)',
        'neon-accent': '0 0 10px rgba(0, 245, 160, 0.5), 0 0 20px rgba(0, 245, 160, 0.3)',
      }
    },
  },
  plugins: [],
}
