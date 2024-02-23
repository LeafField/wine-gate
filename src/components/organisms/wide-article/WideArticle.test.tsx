import { screen, render } from "@testing-library/react";
import WideArticle from "./WideArticle";
import { articleDummyData } from "../../../utils/dummyData";
import dummyImage from "../../../images/dummy_wine2.jpg";

describe("WideArticleの単体テスト", () => {
  test("WideArticleコンポーネントが存在することを確認する", () => {
    const { container } = render(
      <WideArticle article={articleDummyData} favorite_count={10} />,
    );
    expect(screen.getByText(articleDummyData.title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("favorite_countのpropsが無い場合、お気に入り数の表示が無い", () => {
    render(<WideArticle article={articleDummyData} />);
    expect(screen.queryByTestId("fa-star")).not.toBeInTheDocument();
  });

  test("categoriesがnullの場合何も返さない", () => {
    const failDummyData = {
      ...articleDummyData,
    };
    failDummyData.categories = null;

    render(<WideArticle article={failDummyData} />);
  });
});
