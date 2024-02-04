import { Meta, StoryObj } from "@storybook/react";
import ImageInput from "./ImageInput";
import { FC, FormEvent, PropsWithChildren } from "react";

const DummyImageForm: FC<PropsWithChildren> = ({ children }) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = formData.get("image");
    if (data) {
      console.log(data);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {children}
      <button type="submit">投稿</button>
    </form>
  );
};

const meta = {
  title: "molecules/ImageInput",
  component: ImageInput,
} satisfies Meta<typeof ImageInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithForm: Story = {
  decorators: [
    (Story) => (
      <DummyImageForm>
        <Story />
      </DummyImageForm>
    ),
  ],
};
