import { render, screen } from "@testing-library/react";
import { Symbol } from "./Symbol";

describe("Symbolの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<Symbol />);
    expect(container).toMatchSnapshot();
  });
});
