import { render, screen } from "@testing-library/react";
import CategoryPanel from "./CategoryPanel";
import { categoryDummyData } from "../../../utils/dummyData";

describe("CategoryPanelの単体テスト", () => {
  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    render(<CategoryPanel categories={categoryDummyData} />);
    const headingElement = screen.getByRole("heading", {
      name: "カテゴリー検索",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("正しい数のCategoryLinkコンポーネントがレンダリングされる", () => {
    render(<CategoryPanel categories={categoryDummyData} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toEqual(categoryDummyData.length);
  });

  test("各CategoryLinkが正しいテキストを持つ", () => {
    render(<CategoryPanel categories={categoryDummyData} />);
    expect.assertions(categoryDummyData.length);
    categoryDummyData.forEach((category) => {
      const linkElement = screen.getByText(category.chara);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(
      <CategoryPanel categories={categoryDummyData} />,
    );
    expect(container).toMatchSnapshot();
  });
});
