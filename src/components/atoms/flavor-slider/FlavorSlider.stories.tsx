import { StoryObj, Meta } from "@storybook/react";
import FlavorSlider from "./FlavorSlider";
import { useForm, zodResolver } from "@mantine/form";
import {
  EditingPageSchemaType,
  editingPageSchema,
} from "../../../utils/schema";

const UseFormWrapper = ({
  name,
}: {
  name: "sober_or_sweet" | "tart" | "fruity";
}) => {
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
    validate: zodResolver(editingPageSchema),
  });

  return <FlavorSlider name={name} form={form} />;
};

const meta = {
  title: "atoms/FlavorSlider",
  component: UseFormWrapper,
  decorators: [
    (Story) => (
      <div className="mt-8 w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UseFormWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "sober_or_sweet",
  },
};
