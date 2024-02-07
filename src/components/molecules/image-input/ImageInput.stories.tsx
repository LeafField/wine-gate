import { Meta, StoryObj } from "@storybook/react";
import ImageInput from "./ImageInput";
import { FC, FormEvent, PropsWithChildren } from "react";
import { useForm } from "@mantine/form";
import { EditingPageSchemaType } from "../../../utils/schema";

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

const UseFormWrapper = () => {
  const form = useForm<EditingPageSchemaType>({
    initialValues: {
      title: "",
      price: 0,
      place: "",
      description: "",
      erudition: "",
      category_id: "",
      image: null,
      fruity: 1,
      tart: 1,
      sober_or_sweet: 1,
      other_charas: [],
    },
  });

  return <ImageInput form={form} />;
};

const meta = {
  title: "molecules/ImageInput",
  component: UseFormWrapper,
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
