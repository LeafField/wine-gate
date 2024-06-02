import { screen, render } from "@testing-library/react";
import MyPageLoading from "./MyPageLoading";

describe("MyPageLoadingの単体テスト", () => {
  test("WineTitleLoadingコンポーネントが10個レンダリングされているか", () => {
    expect.assertions(10);
    render(<MyPageLoading />);
    const loaders = screen.getAllByText("読み込み中...");
    loaders.forEach((dom) => {
      expect(dom).toBeInTheDocument();
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(<MyPageLoading />);
    expect(container).toMatchSnapshot();
  });
});
