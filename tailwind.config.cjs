/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        myBackground2: "url(bg-blurry.svg)",
        myBackground: "url(bg.jpg)",
        myBackground_sm: "url(bg-sm.jpg)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        color1: "#a240fd",
        color2: "#10c0ec",
      },
    },
  },
  plugins: [],
};
