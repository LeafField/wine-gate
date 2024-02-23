import { render, screen } from "@testing-library/react";
import SmallArticle from "./SmallArticle";
import { SmallArticleProps } from "../../../types/article_types";

describe("SmallArticle 単体テスト", () => {
  const props: SmallArticleProps = {
    tags: "tag1,tag2",
    image_src: "/test/image.jpg",
    title: "Test Title",
    id: "1",
    categories: {
      chara: "Test Chara",
    },
  };

  test("指定されたプロパティを持つ要素がレンダリングされているか", () => {
    render(<SmallArticle {...props} />);
    const imageElement = screen.getByAltText("ワイン画像");
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText(props.title);
    expect(titleElement).toBeInTheDocument();

    const charaElement = screen.getByText(props.categories!.chara);
    expect(charaElement).toBeInTheDocument();

    const tagElements = screen.getAllByText(/tag/);
    expect(tagElements.length).toBe(2);
  });

  test("スナップショット", () => {
    const { container } = render(<SmallArticle {...props} />);
    expect(container).toMatchSnapshot();
  });
});
