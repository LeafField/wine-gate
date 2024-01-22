import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Headerの結合テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
