/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#2563eb', // Now Corporate Blue (kept class name for compatibility or will change it later, let's keep name for now or replace everywhere? Actually let's rename them)
        neonPurple: '#10b981', // Now Teal/Emerald
        neonCyan: '#38bdf8', // Light Blue
        darkBg: '#0f172a', // Slate dark
        glassBg: 'rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
