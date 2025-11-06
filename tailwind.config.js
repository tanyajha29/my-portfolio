// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 10s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
};
