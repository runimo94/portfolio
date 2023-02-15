/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        myBackground: "url(bg-blurry.svg)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
