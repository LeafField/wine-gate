import { screen, render } from "@testing-library/react";
import ArticleBalance from "./ArticleBalance";

describe("ArticleBalanceの単体テスト", () => {
  test("ArticleBalanceが正しく表示される", () => {
    const { container } = render(<ArticleBalance title="甘味" balance={3} />);
    expect(screen.getByText("甘味:3")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
