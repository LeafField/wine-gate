import { screen, render } from "@testing-library/react";
import UserPanelButton from "./UserPanelButton";

describe("UserPanelButtonの単体テスト", () => {
  test("UserPanelButtonが表示されているか", () => {
    render(<UserPanelButton href="/" title="ワイン記事を投稿する" />);
    expect(screen.getByText("ワイン記事を投稿する")).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const { container } = render(
      <UserPanelButton href="/" title="ワイン記事を投稿する" />,
    );
    expect(container).toMatchSnapshot();
  });
});
