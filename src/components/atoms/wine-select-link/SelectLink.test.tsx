import { screen, render } from "@testing-library/react";
import SelectLink from "./SelectLink";

describe("SelectLinkの単体テスト", () => {
  test("SelectLinkが存在することを確認する", () => {
    render(<SelectLink />);
    expect(screen.getByText("簡単なワインの選び方")).toBeInTheDocument();
  });
  test("スナップショットテスト", () => {
    const { container } = render(<SelectLink />);
    expect(container).toMatchSnapshot();
  });
});
