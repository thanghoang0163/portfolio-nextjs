/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "var(--orange)",
        red: "var(--red)",
        "dark-white": "var(--dark-white)",
        "light-blue": "var(--light-blue)",
        "light-orange": "var(--light-orange)",
        "activate-white": "var(--activate-white)",
        "blur-text-color": "var(--blur-text)",
        "border-color": "var(--border)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
      },
      borderRadius: {
        "primary-border-radius": "2rem",
      },
      boxShadow: {
        "primary-shadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
