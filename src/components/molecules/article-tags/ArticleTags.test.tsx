import { screen, render } from "@testing-library/react";
import ArticleTags from "./ArticleTags";
import { categoryDummyData } from "../../../utils/dummyData";

describe("ArticleTagsの単体テスト", () => {
  test("ArticleTagsが正しくレンダリングされているか", () => {
    const { container } = render(
      <ArticleTags category={categoryDummyData[0]} tags="樽熟成,中級者向け" />,
    );
    expect(screen.getByText("渋い")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("tagsの結合された文字列を正しく分解して表示できているか", () => {
    render(
      <ArticleTags category={categoryDummyData[0]} tags="樽熟成,中級者向け" />,
    );
    expect(screen.getByText("樽熟成")).toBeInTheDocument();
    expect(screen.getByText("中級者向け")).toBeInTheDocument();
  });
});
