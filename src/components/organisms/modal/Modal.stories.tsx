import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { useStore } from "../../../store";
import { useEffect } from "react";

const meta = {
  title: "organisms/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const PC: Story = {
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
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
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
};

export const ShowHide: Story = {
  decorators: [
    (Story) => {
      const { setModal, modal } = useStore();
      const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const messages = e.target.value.split("\n");
        setModal(messages);
      };
      useEffect(() => {
        setModal([
          "メールアドレスかパスワードが間違っています。",
          "確認の上もう一度お試しください。",
        ]);
      }, [setModal]);

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

export const LoginedModal: Story = {
  decorators: [
    (Story) => {
      const { setModal } = useStore();
      useEffect(() => {
        setModal(["ログインしました。"]);
      }, [setModal]);
      return <Story />;
    },
  ],
};

export const LongPageModal: Story = {
  decorators: [
    (Story) => {
      const { setModal } = useStore();

      const clickHandler = () => {
        setModal([
          "ログインしました。",
          "hogehogehogehogehogehogehogehogehogehogehoge",
          "asjfdhasklhgkdsahfgkfh",
        ]);
      };

      return (
        <div>
          <Story />
          <div className="h-[150vh] bg-gray"></div>
          <button onClick={clickHandler}>show modal</button>
        </div>
      );
    },
  ],
};
