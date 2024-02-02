import { Meta, StoryObj } from "@storybook/react";
import AboutLink from "./AboutLink";
import TopPageContainer from "../toppage-container/TopPageContainer";
import GridContainer from "../grid-container/GridContainer";

const meta = {
  title: "atoms/AboutLink",
  component: AboutLink,
  decorators: [
    (Story) => (
      <TopPageContainer>
        <div className="grid grid-rows-[2fr,1fr] gap-5 tablet:grid-cols-2 desktop:grid-cols-3 desktop:grid-rows-2">
          <div className="group relative block h-[12rem] w-full overflow-hidden tablet:col-span-2 tablet:h-[24.0625rem] desktop:row-span-2"></div>
          <Story />
        </div>
      </TopPageContainer>
    ),
  ],
} satisfies Meta<typeof AboutLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
