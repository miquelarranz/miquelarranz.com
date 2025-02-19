import daisyUI from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  extend: {},
  plugins: [typography, daisyUI],
  daisyui: {
    themes: ["night"],
  },
};
