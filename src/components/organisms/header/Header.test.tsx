import { render } from "@testing-library/react";
import Header from "./Header";

describe("HeaderTitleの単体テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
