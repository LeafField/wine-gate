import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSProperties } from "react";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
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
      spacing: {
        15: "3.75rem",
        30: "7.5rem",
        45: "11.25rem",
      },
      fontSize: {
        "header-subtitle": "clamp(0.625rem,1.54vw,1rem)",
        "header-title": "clamp(1.25rem,3.46vw,2.25rem)",
        "main-text": "clamp(0.875rem,1.54vw,1rem)",
        heading2: "clamp(1.5rem,3.07vw,2rem)",
        heading3: "clamp(1.125rem,2.31vw,1.5rem)",
        "menu-title": "clamp(0.625rem,2.79vw,0.75rem)",
        "menu-icon": "clamp(1rem,4.18vw,1.125rem)",
      },
      screens: {
        desktop: "1440px",
        laptop: "1108px",
        tablet: "768px",
      },
      zIndex: {
        front: "1",
        "auth-paper": "10",
        nav: "100",
        overlay: "500",
        "nav-menu": "1000",
      },
      backgroundImage: {
        "image-cover":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 16%, rgba(0, 0, 0, 0.4) 50%,transparent 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
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
          backgroundColor: "#FFFFFF",
        } satisfies CSSProperties,
      });

      addUtilities({
        ".panel-inner": {
          width: "18.3125rem",
        } satisfies CSSProperties,
      });

      addComponents({
        ".user-panel-button": {
          width: "8.5rem",
          height: "4.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.75rem",
          border: "2px solid #B8B6B6",
          transition: "border-color 0.3s ease,",
        } satisfies CSSProperties,
      });

      addUtilities({
        ".grid-areas": {
          gridTemplate:
            '"hero hero hero hero" auto ".... main nav ...." auto / 1fr auto auto 1fr',
        } satisfies CSSProperties,
      });

      addUtilities({
        ".grid-areaMobile": {
          gridTemplateAreas: '"hero" "main" ',
        } satisfies CSSProperties,
      });

      addUtilities({
        ".empty-hero:not(:has([class*=hero]))": {
          paddingTop: "3.75rem",
        } satisfies CSSProperties,
      });

      addUtilities({
        ".main": {
          gridArea: "main",
          minHeight:
            "clamp(100vh - 3.44rem - 3rem,100vh - 9.24vw - 3rem,100vh - 6rem - 3rem)",
        } satisfies CSSProperties,
      });

      addUtilities({
        ".nav": {
          gridArea: "nav",
        } satisfies CSSProperties,
      });

      addUtilities({
        ".hero": {
          gridArea: "hero",
          marginBottom: "7.5rem",
        } satisfies CSSProperties,
      });
      addComponents({
        ".show-panel": {
          visibility: "visible",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100svh",
          width: "100vw",
          bottom: "0",
          left: "0",
          right: "0",
          top: "0",
          backgroundColor: "rgba(255,255,255,0.8)",
          transition: "background-color 0.3s ease",
          backdropFilter: "blur(4px)",
        } satisfies CSSProperties,
      });
      addComponents({
        ".overlay": {
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        } satisfies CSSProperties,
      });
    }),
  ],
};
export default config;
