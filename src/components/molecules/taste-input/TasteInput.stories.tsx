import { Meta, StoryObj } from "@storybook/react";
import TasteInput from "./TasteInput";
import { categoryDummyData } from "../../../utils/dummyData";
import { FormEvent } from "react";
import { useForm, zodResolver } from "@mantine/form";
import {
  EditingPageSchemaType,
  editingPageSchema,
} from "../../../utils/schema";

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
    validate: zodResolver(editingPageSchema),
  });

  return <TasteInput categories={categoryDummyData} form={form} />;
};

const meta = {
  title: "molecules/TasteInput",
  component: UseFormWrapper,
} as Meta<typeof TasteInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <div className="mt-8 w-[300px]">
          <Story />
        </div>
      );
    },
  ],
};

// export const WithForm: Story = {
//   decorators: [
//     (Story) => {
//       const submitHandler = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const data = Object.fromEntries(formData);
//         console.log(data);
//       };
//       return (
//         <div className="mt-8 w-[300px]">
//           <form onSubmit={submitHandler}>
//             <Story />
//             <button type="submit" className="mt-8 border border-gray px-3 py-1">
//               送信
//             </button>
//           </form>
//         </div>
//       );
//     },
//   ],
// };
