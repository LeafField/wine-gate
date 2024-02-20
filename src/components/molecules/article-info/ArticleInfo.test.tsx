import { screen, render } from "@testing-library/react";
import ArticleInfo from "./ArticleInfo";

describe("ArticleInfoの単体テスト", () => {
  test("ArticleInfoが正しく表示される", () => {
    const { container } = render(
      <ArticleInfo red={false} fruity={1} sober_or_sweet={2} tart={3} />,
    );
    expect(screen.getByText("果実味:1")).toBeInTheDocument();
    expect(screen.getByText("甘味:2")).toBeInTheDocument();
    expect(screen.getByText("酸味:3")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("red=trueの場合、渋味の項目が表示される", () => {
    render(<ArticleInfo red={true} fruity={4} sober_or_sweet={5} tart={3} />);
    expect(screen.getByText("渋味:5")).toBeInTheDocument();
  });

  test("favorite_countが存在する場合、お気に入り数が表示される", () => {
    render(
      <ArticleInfo
        red={false}
        fruity={4}
        sober_or_sweet={5}
        tart={3}
        favorite_count={10}
      />,
    );
    expect(screen.getByTestId("fa-star")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
