/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#2A577F",
          secondary: "#6E8B56",
          accent: "#C2936D",
          neutral: "#464646",
          "base-100": "#F5F5F5",
          info: "#4E7EAD",
          success: "#5E984B",
          warning: "#D9A628",
          error: "#A8514A",
        },
      },
    ],
  },
};
