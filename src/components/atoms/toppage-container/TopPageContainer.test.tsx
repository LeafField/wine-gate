import { render } from "@testing-library/react";
import TopPageContainer from "./TopPageContainer";

describe("TopPageContainerの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<TopPageContainer />);
    expect(container).toMatchSnapshot();
  });
});
