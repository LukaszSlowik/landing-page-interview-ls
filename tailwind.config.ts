import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        header: "var(--header-height)",
        "customfull-height": "calc(100vh - var(--header-height))",
      },
      minHeight: {
        header: "var(--header-height)",
        "customfull-height": "calc(100vh - var(--header-height))",
      },

      width: {
        "custom-max": "1440px",
      },
      maxWidth: {
        "custom-max": "1440px",
      },
      margin: {
        header: "var(--header-height)",
      },
      screens: {
        xs: "400px",
        xxs: "330px",
      },
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bgOrange: "var(--bg-orange)",
        fg: "var(--fg)",
        fg2: "var(--fg2)",
        logo: "var(--logo)",
        orange: "var(--orange)",
        cyan: "var(--cyan)",
      },

      dropShadow: {
        "3xl": "0 35px 35px bg",
        images: "0px 2px 5px rgba(0, 0, 0, 0.15)",
      },

      boxShadow: {
        header: "2px 2px 5px 0 rgba(0, 0, 0, 0.15)",
        images:
          "0 0 10px rgba(0, 0, 0, 0.5),0 0 20px rgba(0, 0, 0, 0.4),0 0 30px rgba(0, 0, 0, 0.3),0 0 40px rgba(0, 0, 0, 0.2)",
        main: "0 8px 35px 0 rgba(187, 169, 142, 0.15)",
        box: "0px 8px 5px rgba(187, 169, 142, 0.15)",
        text: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
