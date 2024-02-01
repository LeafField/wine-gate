import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useStore } from "../../../store";
import { useEffect } from "react";

const meta = {
  title: "organisms/Modal",
  component: Modal,
  decorators: [
    (Story) => {
      const { setModal } = useStore();
      useEffect(() => {
        setModal([
          "メールアドレスかパスワードが間違っています。",
          "確認の上もう一度お試しください。",
        ]);
      }, [setModal]);
      return <Story />;
    },
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const PC: Story = {};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
};

export const ShowHide: Story = {
  decorators: [
    (Story) => {
      const { setModal, modal } = useStore();
      const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const messages = e.target.value.split("\n");
        setModal(messages);
      };
      return (
        <>
          <Story />
          <input type="text" className="border" onChange={onchangeHandler} />
          <p>{modal}</p>
        </>
      );
    },
  ],
};
