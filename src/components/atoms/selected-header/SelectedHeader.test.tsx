import { screen, render } from "@testing-library/react";
import SelectedHeader from "./SelectedHeader";

describe("SelectedHeaderの単体テスト", () => {
  test("SelectedHeaderコンポーネントが存在することを確認する", () => {
    const { container } = render(<SelectedHeader title="ワイン検索" />);
    expect(screen.getByText("ワイン検索")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
