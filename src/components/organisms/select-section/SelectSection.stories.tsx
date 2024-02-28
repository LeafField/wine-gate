import { StoryObj, Meta } from "@storybook/react";
import SelectSection from "./SelectSection";
import { categoryFavoriteSmallArticleDummyData } from "../../../utils/dummyData";

const DummyDescription = () => {
  return (
    <>
      タンニンが強さが強調されていたり、ブラックベリーやカシス、プルーン等黒系果実で表現される事も多い種類です。
      <br />
      タンニンは口の中で渋みを感じさせる成分であり、若いワインでは特に強く感じられることがあります。
      <br />
      カベルネ・ソーヴィニヨンやシラーなどの品種が一般的にこのタイプのワインに含まれます。
      <br />
      主に色が濃く重めの肉料理に合いやすいです。
    </>
  );
};

const meta = {
  title: "organisms/SelectSection",
  component: SelectSection,
} satisfies Meta<typeof SelectSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sober: Story = {
  args: {
    wines: categoryFavoriteSmallArticleDummyData,
    title: "渋い",
    children: <DummyDescription />,
    link: "sober",
  },
};
