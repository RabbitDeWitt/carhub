import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/hero-bg.png')",
        'pattern': "url('/pattern.png')",
      },
      colors: {
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "black-100": "#2B2C35",
        grey: "#747A88",
      },
    }
  },
  plugins: [],
};
export default config;
