import { screen, render } from "@testing-library/react";
import LoadingOverlay from "./LoadingOverlay";

describe("LoadingOverlayの単体テスト", () => {
  test("アクセシビリティ用のsr-onlyのテキストが存在する", () => {
    render(<LoadingOverlay />);
    const srOnly = screen.getByText("サーバーと通信中......");
    expect(srOnly).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const { container } = render(<LoadingOverlay />);
    expect(container).toMatchSnapshot();
  });
});
