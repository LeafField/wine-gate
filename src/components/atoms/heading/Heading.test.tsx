import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Headingの単体テスト", () => {
  test("タイトルが正しく表示される", () => {
    const testTitle = "テストタイトル";
    render(<Heading title={testTitle} />);
    const headingElement = screen.getByText(testTitle);
    expect(headingElement).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const testTitle = "テストタイトル";
    const { container } = render(<Heading title={testTitle} />);
    expect(container).toMatchSnapshot();
  });
});
