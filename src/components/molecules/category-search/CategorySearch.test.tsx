import { render, screen } from "@testing-library/react";
import CategorySearch from "./CategorySearch";
import { categoryDummyData } from "../../../utils/dummyData";

describe("CategorySearchの単体テスト", () => {
  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    render(<CategorySearch categories={categoryDummyData} />);
    const headingElement = screen.getByRole("heading", {
      name: "カテゴリー検索",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("正しい数のCategoryLinkコンポーネントがレンダリングされる", () => {
    render(<CategorySearch categories={categoryDummyData} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toEqual(categoryDummyData.length);
  });

  test("各CategoryLinkが正しいテキストを持つ", () => {
    render(<CategorySearch categories={categoryDummyData} />);
    expect.assertions(categoryDummyData.length);
    categoryDummyData.forEach((category) => {
      const linkElement = screen.getByText(category.chara);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
