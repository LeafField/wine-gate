import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footerの結合テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
