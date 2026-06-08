/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      opacity: {
        2: "0.02",
        6: "0.06",
        8: "0.08",
        12: "0.12",
        15: "0.15",
        18: "0.18",
        22: "0.22",
      },
      spacing: {
        5.5: "1.375rem",
      },
      colors: {
        accent: {
          DEFAULT: "#2563eb",
          soft: "#60a5fa",
          deep: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
        "float-rev": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(9px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "drift-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(8%, 6%) scale(1.18)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.05)" },
          "50%": { transform: "translate(-9%, 5%) scale(0.92)" },
        },
        "drift-c": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(6%, -8%) scale(1.22)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        float: "float 5.5s ease-in-out infinite",
        "float-rev": "float-rev 6.5s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "drift-a": "drift-a 17s ease-in-out infinite",
        "drift-b": "drift-b 21s ease-in-out infinite",
        "drift-c": "drift-c 19s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
