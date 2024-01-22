import { render } from "@testing-library/react";
import { Symbol } from "./Symbol";

describe("Symbolの単体テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<Symbol />);
    expect(container).toMatchSnapshot();
  });
});
