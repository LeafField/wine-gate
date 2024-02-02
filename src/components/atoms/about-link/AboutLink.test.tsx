import { screen, render } from "@testing-library/react";
import AboutLink from "./AboutLink";

describe("AboutLinkの単体テスト", () => {
  test("スナップショットテスト", () => {
    const { container } = render(<AboutLink />);
    expect(container).toMatchSnapshot();
  });
});
