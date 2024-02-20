import { screen, render } from "@testing-library/react";
import WideArticle from "./WideArticle";
import { articleDummyData } from "../../../utils/dummyData";
import dummyImage from "../../../images/dummy_wine2.jpg";

describe("WideArticleの単体テスト", () => {
  test("WideArticleコンポーネントが存在することを確認する", () => {
    const { container } = render(
      <WideArticle
        article={articleDummyData}
        image_src={dummyImage.src}
        favorite_count={10}
      />,
    );
    expect(screen.getByText(articleDummyData.title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("favorite_countのpropsが無い場合、お気に入り数の表示が無い", () => {
    render(
      <WideArticle article={articleDummyData} image_src={dummyImage.src} />,
    );
    expect(screen.queryByTestId("fa-star")).not.toBeInTheDocument();
  });
});
