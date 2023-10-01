/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "Sora": "'Sora', sans-serif",
        "workSans": "'Work Sans', sans-ser"
      },
      boxShadow: {
        'extension': ' 0px 4px 20px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

