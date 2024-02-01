import { Meta, StoryObj } from "@storybook/react";
import SelectLink from "./SelectLink";
import TopPageContainer from "../toppage-container/TopPageContainer";
import GridContainer from "../grid-container/GridContainer";

const meta = {
  title: "atoms/SelectLink",
  component: SelectLink,
} satisfies Meta<typeof SelectLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <TopPageContainer>
        <GridContainer>
          <Story />
        </GridContainer>
      </TopPageContainer>
    ),
  ],
};
