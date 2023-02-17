/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '8px 8px 0px #666666',
      'lg': '16px 16px 0px #666666'
    }
  },
  plugins: [],
}
