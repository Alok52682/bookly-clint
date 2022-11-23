/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image1': "url('src/Assets/Banner_img.webp')",
      }
    },
  },
  plugins: [require("daisyui")],
}
