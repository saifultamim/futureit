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
      backgroundImage : {
        services:
          "linear-gradient(74.86deg, #FEF6DF -2.19%, #FEFEFC 46.31%, #FFF5DC 94.8%)",
          testimonial:
          "linear-gradient(74.86deg, #FEF6DF -2.19%, #FEFEFC 46.31%,#FFF5DC 94.8%)",
          callToUs:
          "linear-gradient(90deg, #EE3373 0%, #EE3373 34.38%, #EE3373 94.79%)",
          contactNumber: "linear-gradient(97.64deg, #00BCCF 1.51%, #00BCCF 108.53%)",
      },
    },
  },
  plugins: [],
};
