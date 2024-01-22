import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSProperties } from "react";

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
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".symbol": {
          width: "clamp(4.08rem,12vw,7.75rem)",
          height: "clamp(4.08rem,12vw,7.75rem)",
        } satisfies CSSProperties,
      });
    }),
  ],
};
export default config;
