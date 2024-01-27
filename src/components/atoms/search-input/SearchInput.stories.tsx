import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";
import DummyForm from "../../test-components/DummyForm";

const meta = {
  title: "atoms/SearchInput",
  component: SearchInput,
  decorators: [
    (Story) => (
      <div className="panel-inner">
        <DummyForm>
          <Story />
        </DummyForm>
      </div>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
