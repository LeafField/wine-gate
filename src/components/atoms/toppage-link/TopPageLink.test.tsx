import { screen, render } from "@testing-library/react";
import TopPageLink from "./TopPageLink";

describe("TopPageLinkコンポーネントの単体テスト", () => {
  test("トップページへ戻るリンクが正しく表示されているか", () => {
    expect.assertions(2);
    const { container } = render(<TopPageLink />);
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
