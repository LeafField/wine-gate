import { Meta, StoryObj } from "@storybook/react";
import TasteInput from "./TasteInput";
import { categoryDummyData } from "../../../utils/dummyData";
import { FormEvent } from "react";

const meta = {
  title: "molecules/TasteInput",
  component: TasteInput,

  args: {
    categories: categoryDummyData,
  },
} as Meta<typeof TasteInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="mt-8 w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export const WithForm: Story = {
  decorators: [
    (Story) => {
      const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log(data);
      };
      return (
        <div className="mt-8 w-[300px]">
          <form onSubmit={submitHandler}>
            <Story />
            <button type="submit" className="mt-8 border border-gray px-3 py-1">
              送信
            </button>
          </form>
        </div>
      );
    },
  ],
};
