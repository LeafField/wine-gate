import { render, screen } from "@testing-library/react";
import ImageFooter from "./ImageFooter";

describe("ImageFooterの単体テスト", () => {
  it("propsに渡した値通りに正しくレンダリングされているか", () => {
    const { container } = render(
      <ImageFooter author_name="Test Author" price={1000} />,
    );

    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("1000円(参考価格)")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
