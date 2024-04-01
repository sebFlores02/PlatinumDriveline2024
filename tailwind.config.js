/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "790px",
        // => @media (min-width: 768px) { ... }

        nav: "908px",

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        nav2: "1120px",

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        naranja: "#e98512",
        gris_oscuro: "#303030",
        gris_ligero: "#707070",
        azul_delphi: "#004aca",
      },
    },
  },
  plugins: [],
};
