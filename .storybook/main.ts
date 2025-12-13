import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: "@storybook/nextjs",

  docs: {},

  staticDirs: ["../public"],

  env(config) {
    return {
      ...config,
      NEXT_PUBLIC_SUPABSE_IMAGE_URL: "",
    };
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
