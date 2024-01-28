import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchButton from "./SearchButton";

describe("SearchButtonの単体テスト", () => {
  test("コンポーネントが正しくレンダリングされているか", () => {
    render(<SearchButton />);
    const button = screen.getByRole("button", { name: /検索/i });
    expect(button).toBeInTheDocument();
  });

  test("ボタンがクリック可能であること", () => {
    render(<SearchButton />);
    const button = screen.getByRole("button", { name: /検索/i });
    userEvent.click(button);
    expect(button).toBeEnabled();
  });

  test("スナップショットテスト", () => {
    const { container } = render(<SearchButton />);
    expect(container).toMatchSnapshot();
  });
});
