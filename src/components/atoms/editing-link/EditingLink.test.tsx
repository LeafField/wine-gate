import { screen, render } from "@testing-library/react";
import EditingLink from "./EditingLink";

describe("EditingLinkの単体テスト", () => {
  test("propsのwine_idに応じて正しいリンク先がaタグのhrefに設定される", () => {
    const { container } = render(<EditingLink wine_id="1234" />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/editing/1234");
    expect(container).toMatchSnapshot();
  });
});
