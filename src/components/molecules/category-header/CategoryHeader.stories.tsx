import { StoryObj, Meta } from "@storybook/nextjs-vite";
import CategoryHeader from "./CategoryHeader";

const meta = {
  title: "molecules/CategoryHeader",
  component: CategoryHeader,
} satisfies Meta<typeof CategoryHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "新着ワイン",
  },
  decorators: [
    (Story) => (
      <div className="max-w-[1039px]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: [["category", "sober"]],
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    title: "新着ワイン",
  },

  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: [["category", "sober"]],
      },
    }
  },

  decorators: [
    (Story) => (
      <div className="px-4">
        <Story />
      </div>
    ),
  ],

  globals: {
    viewport: {
      value: "iphone6",
      isRotated: false
    }
  }
};
