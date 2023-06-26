/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
      },
      spacing: {
        105: "27rem",
      },
      maxWidth: {
        xxs: "15rem",
        xs: "26rem",
      },
      minWidth: {
        xxs: "15rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
