import { screen, render } from "@testing-library/react";
import ArticleHeader from "./ArticleHeader";

describe("ArticleHeaderの単体テスト", () => {
  test("propsとして受け取ったtitleが表示される", () => {
    render(<ArticleHeader title="テストタイトル" />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const { container } = render(
      <ArticleHeader title="コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ" />,
    );
    expect(container).toMatchSnapshot();
  });
});
