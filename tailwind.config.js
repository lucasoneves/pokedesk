/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xs': '0 2px 20px rgba(225,225,225, 1)',
      },
      fontSize: {
        'tiny-xs': '8px',
        tiny: '9px'
      },
      padding: {
        '1': '0.15rem'
      },
      gridAutoColumns: {
        '5fr': 'minmax(152px, 1fr)'
      }
    },
  },
  plugins: [],
}

