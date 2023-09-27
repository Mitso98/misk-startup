/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "initial-mt": "8rem",
        "initial-ml": "4rem",
      },
      fontSize: {
        "mobile-text": "12px",
      },
      fontFamily: {
        inter: ["Inter", "sans"],
        poppins: ["Poppins", "sans"],
        "noto-sans": ["Noto Sans", "sans"],
      },
    },
  },
  plugins: [],
};
