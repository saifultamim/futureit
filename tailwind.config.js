/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./features/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      siliguri: "'Hind Siliguri', sans-serif",
      inter: "'Inter', sans-serif",
      noto: "'Noto Sans Bengali', sans-serif",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // "primary": "#403b3b",#22C55E,#007A5C,#1aab4f ,#FFA500
        // primary: "#007BFF",
        // "secondary": "#c9870f",
        primary: "#F5F5F5",
        secondary: "#EE3373",
       // button: "rgb(24, 100, 171)",
        cta:"#00BCCF",
        interactiveHover: "rgb(249 115 22)",
        accent: "#E8E8E8",
        surface: "#F2F4F8",
        success: "#38966f",
        ivory:"ivory"
        // 50: "rgb(216 254 197 / 40%)",
      },
    },
  },
  plugins: [],
};
