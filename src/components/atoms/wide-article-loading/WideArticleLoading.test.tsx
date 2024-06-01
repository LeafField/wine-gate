import { render } from "@testing-library/react";
import WideArticleLoading from "./WideArticleLoading";

describe("WideArticleLoadingの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<WideArticleLoading />);
    expect(container).toMatchSnapshot();
  });
});
