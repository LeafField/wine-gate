import { Meta, StoryObj } from "@storybook/react";
import ImageInput from "./ImageInput";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import { useForm } from "@mantine/form";
import { EditingPageSchemaType } from "../../../utils/schema";
import { useStore } from "../../../store";

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

const ImageInputWrapper: FC = () => {
  const { setImage_src } = useStore();
  useEffect(() => {
    setImage_src(
      "https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    );
  }, [setImage_src]);
  return null;
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
      tags: [],
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

export const WithDBImageData: Story = {
  decorators: [
    (Story) => (
      <DummyImageForm>
        <ImageInputWrapper />
        <Story />
      </DummyImageForm>
    ),
  ],
};
