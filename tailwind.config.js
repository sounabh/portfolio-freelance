/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Remove pages if not using pages dir
    // './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // if you use .dark class for dark mode
  theme: {
    extend: {
      fontFamily: {
        apercu: ['var(--font-apercu)', 'sans-serif'],
        sfr: ['var(--font-sfr)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
