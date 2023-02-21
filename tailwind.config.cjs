/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        myBackground2: "url(/images/bg-blurry.svg)",
        myBackground: "url(/images/bg.jpg)",
        myBackground_sm: "url(/images/bg-sm.jpg)",
        myBackground_blurry: "url(/images/bg-blurry-2.svg)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        color1: "#a240fd",
        color1Darker: "#501f7d",
        color2: "#10c0ec",
        color2Darker: "#044252",
      },
    },
  },
  plugins: [],
};
