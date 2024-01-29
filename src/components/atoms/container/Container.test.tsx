import { screen, render } from "@testing-library/react";
import Container from "./Container";

describe("Contaierの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });
});
