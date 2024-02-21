import { render, screen } from "@testing-library/react";
import CategoryLink from "./CategoryLink";

describe("CategoryLinkの単体テスト", () => {
  const mockProps = {
    title: "渋い",
    src: "sober",
  };

  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    render(<CategoryLink {...mockProps} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });

  test("リンクが正しいhrefを持つ", () => {
    render(<CategoryLink {...mockProps} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute(
      "href",
      `/category/${mockProps.src}/new/1`,
    );
  });

  test("リンクが正しいテキストを持つ", () => {
    render(<CategoryLink {...mockProps} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveTextContent(mockProps.title);
  });
});
