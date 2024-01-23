import { render, screen } from "@testing-library/react";
import NewArrivals from "./NewArrivals";
import { smallArticleDummyData } from "../../../utils/dummyData";

describe("NewArrivalsの結合テスト", () => {
  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    render(<NewArrivals articles={smallArticleDummyData} />);
    const sectionElement = screen.getByRole("heading", { name: "新着ワイン" });
    expect(sectionElement).toBeInTheDocument();
  });

  test("正しい数のSmallArticleコンポーネントがレンダリングされる", () => {
    render(<NewArrivals articles={smallArticleDummyData} />);
    const smallArticleElements = screen.getAllByRole("article");
    expect(smallArticleElements.length).toEqual(3);
  });

  test("スナップショットテスト", () => {
    const { container } = render(
      <NewArrivals articles={smallArticleDummyData} />,
    );
    expect(container).toMatchSnapshot();
  });
});
