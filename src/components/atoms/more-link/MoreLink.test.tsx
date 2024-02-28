import { screen, render } from "@testing-library/react";
import MoreLink from "./MoreLink";

describe("MoreLinkの単体テスト", () => {
  test("MoreLinkコンポーネントが存在することを確認する", () => {
    const { container } = render(<MoreLink link="sober" />);
    expect(screen.getByText("もっと見る")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("propsのlinkを元にリンクが正しく生成されているか", () => {
    render(<MoreLink link="sober" />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/category/sober/new/1",
    );
  });
});
