import { render, screen } from "@testing-library/react";
import TopPageContainer from "./TopPageContainer";

describe("TopPageContainerの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<TopPageContainer />);
    expect(container).toMatchSnapshot();
  });

  test("paddingがtrueの場合", () => {
    render(<TopPageContainer />);
    expect(screen.getByTestId("top-page-container")).toHaveClass("px-4");
  });

  test("paddingがfalseの場合", () => {
    render(<TopPageContainer padding={false} />);
    expect(screen.getByTestId("top-page-container")).not.toHaveClass("px-4");
  });
});
