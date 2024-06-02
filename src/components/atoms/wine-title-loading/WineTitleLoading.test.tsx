import { screen, render } from "@testing-library/react";
import WineTitleLoading from "./WineTitleLoading";

describe("WineTitleLoadingの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<WineTitleLoading />);
    expect(container).toMatchSnapshot();
  });
});
