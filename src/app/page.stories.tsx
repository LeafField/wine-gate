import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

import { setupWorker } from "msw/browser";
import { http, HttpResponse } from "msw";

const worker = setupWorker();

const meta = {
  title: "test/Home",
  component: Home,
  parameters: {
    msw: {
      handlers: [
        http.get("/test", () =>
          HttpResponse.json({ status: 200, text: "OK!" }),
        ),
      ],
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
