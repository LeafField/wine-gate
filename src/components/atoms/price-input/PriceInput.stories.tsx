import { Meta, StoryObj } from "@storybook/react";
import PriceInput from "./PriceInput";
import { useForm } from "@mantine/form";
import { EditingPageSchemaType } from "../../../utils/schema";

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

  return <PriceInput form={form} />;
};

const meta = {
  title: "atoms/PriceInput",
  component: UseFormWrapper,
} satisfies Meta<typeof PriceInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
