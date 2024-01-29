import { screen, render } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("LoginButtonの単体テスト", () => {
  test("LoginButtonが表示されているか", () => {
    render(<LoginButton />);
    expect(screen.getByText("ログイン/会員登録")).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const { container } = render(<LoginButton />);
    expect(container).toMatchSnapshot();
  });
});
