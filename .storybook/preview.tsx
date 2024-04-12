import type { Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "@mantine/core/styles.css";
import "../src/app/globals.css";
import React from "react";
import { notoStyle } from "../src/utils/font";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/utils/queryClient";

// initialize({
//   onUnhandledRequest: "bypass",
// });

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
  // loaders: [mswLoader],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="light">
          <div className={notoStyle.className}>
            <Story />
          </div>
        </MantineProvider>
      </QueryClientProvider>
    ),
  ],
};

export default preview;
