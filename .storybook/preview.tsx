import type { Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "@mantine/core/styles.css";
import "../src/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import React from "react";
import { notoStyle } from "../src/utils/font";

initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <div className={notoStyle.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
