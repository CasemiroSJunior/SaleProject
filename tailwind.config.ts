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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "100vh":"100vh",
      },
      width: {
        "100vh": "100vh"
      },
      colors:{
        "themeBackground": "#024959",
        "themeGray": "#A1A2A6",
        "themeLightGray": "#E4E4E4",
        "themeYellow": "#F2C12E",
        "themeYellowDark": "#F2AE30",
        "themeBrown": "#593E25",
        "themeLightBrown": "#AE733E",
        "themeChestnutBrown": "#954535",
        "themeLightPurple": "#D9C8FA",
      }
    },
  },
  plugins: [],
};
export default config;
