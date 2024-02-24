import { screen, render } from "@testing-library/react";
import WineTitle from "./WineTitle";

describe("WineTitleの単体テスト", () => {
  test("WineTitleコンポーネントが存在することを確認する", () => {
    const { container } = render(<WineTitle id="1" title="ワインのタイトル" />);
    expect(screen.getByText("ワインのタイトル")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
