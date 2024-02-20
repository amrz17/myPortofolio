/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "608px",
        150: "750px",
      },
      widht: {
        100: "600px",
      },
      fontFamily: {
        spaceMono: "Space Mono, monospace",
        poppins: "Poppins, sans-serif",
      },
      colors: {
        deepBlue: "#252c35",
        moofize: "#3460c7",
        crowdsec: "#5146ae",
        avest: "#327ef6",
        epsor: "#003290",
        telio: "#252525",
        egg: "#A5D7E8",
        2: "#576CBC",
        danger: "#C70039",
      },
      textUnderlineOffset: {
        10: "18px",
      },
      textDecorationThickness: {
        6: "6px",
      },
      borderRadius: {
        large: "50px",
      },
    },
  },
  plugins: [],
};
