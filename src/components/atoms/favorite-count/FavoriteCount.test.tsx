import { screen, render } from "@testing-library/react";
import FavoriteCount from "./FavoriteCount";

describe("FavoriteCountの単体テスト", () => {
  test("渡されたPropsに対して正しくレンダリングされているか", () => {
    const { container } = render(<FavoriteCount count={48} />);
    expect(screen.getByText("お気に入り数:48")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
