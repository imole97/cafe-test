/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "phone-mini": "250px",
      "phone-xs": "320px",
      "phone-sm": "375px",
      "phone-des": "390px",
      "phone-md": "400px",
      "phone-wide": "425px",
      "phone-lg": "480px",
      "desktop-med": "1350px",
      "desktop-wide": "1440px",
      "2xl": "1536px",
      "desktop-des": "1728px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        status: {
          err:{
            DEFAULT:"#FE4545"
          },
          bg_p: "rgba(182, 170, 58, 0.1)",
          bg_c: "rgba(35, 175, 83, 0.1)",
          bg_login:"rgba(5, 3, 3, 0.8)",
          text_p: "#70722C",
          text_c: "#23AF53",
        },
        app: {
          DEFAULT: "#04060E",
          gray_1: "#373435",
          gray_2: "#6A6B7A",
          gray_3: "#E0E0E6",
          gray_4: "#B6B9C7",
          gray_5: "#F6F6F9",
          gray_6: "#F0F0F2",
          gray_7: "#ADADC7",
          red: "#ED3237",
        },
        blog: {
          cancel: "rgba(226, 120, 123, 0.33)",
          icon_border:"#F3D8D8"
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".max-w-unset": {
          "max-width": "unset",
        },
        ".h-unset": {
          height: "unset",
        },
        ".max-h-unset": {
          "max-height": "unset",
        },
        ".max-x-width": {
          "max-width": "1728px",
        },
        ".fs-inherit": {
          "font-size": "inherit",
        },
      });
    }),
  ],
};

//bg_p; p stands for pending
//bg_c; c stands for completed
//bg_b; b stands for blog i.e bg use on blog modal

//gray_1 for text
//gray_2 for text
//gray_3 for tab background
//gray_4 for table header text
//gray_5 for table header background
//gray_6 seems like app background
