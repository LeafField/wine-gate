import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSProperties } from "react";
import containerQuery from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F2D399",
        red: "#BF0404",
        background: "#F2F2F2",
        blue: "#1400FF",
        gray: "#B8B6B6",
        black: "#030303",
      },
      fontSize: {
        "header-subtitle": "clamp(0.625rem,1.54vw,1rem)",
        "header-title": "clamp(1.25rem,3.46vw,2.25rem)",
        "main-text": "clamp(0.875rem,1.54vw,1rem)",
        heading2: "clamp(1.5rem,3.07vw,2rem)",
        heading3: "clamp(1.125rem,2.31vw,1.5rem)",
      },
      screens: {
        desktop: "1440px",
        laptop: "1108px",
        tablet: "768px",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        ".symbol": {
          width: "clamp(4.08rem,12vw,7.75rem)",
          height: "clamp(4.08rem,12vw,7.75rem)",
        } satisfies CSSProperties,
      });
      addComponents({
        ".nav-title": {
          fontSize: "clamp(1.125rem,2.31vw,1.5rem)",
          width: "18.3125rem",
          textAlign: "right",
          color: "#030303",
        } satisfies CSSProperties,
      });
      addComponents({
        ".nav-panel": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          width: "20.8125rem",
          border: "1px solid #B8B6B6",
          padding: "1rem 1.25rem",
        } satisfies CSSProperties,
      });
      addUtilities({
        ".panel-inner": {
          width: "18.3125rem",
        } satisfies CSSProperties,
      });
    }),
    containerQuery,
  ],
};
export default config;
