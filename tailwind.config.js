// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.6s infinite",
        spin: "spin 1.2s linear infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-200": {
          animationDelay: "200ms",
        },
        ".animation-delay-400": {
          animationDelay: "400ms",
        },
        ".delay-100": {
          animationDelay: "100ms",
        },
        ".delay-200": {
          animationDelay: "200ms",
        },
        ".delay-300": {
          animationDelay: "300ms",
        },
      };

      addUtilities(newUtilities);
    },
  ],
  extend: {
  animation: {
    "spin-slow": "spin 3s linear infinite",
  },
  keyframes: {
    spin: {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  },
}
};



