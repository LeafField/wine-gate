import { screen, render } from "@testing-library/react";
import HeroHeader from "./HeroHeader";

describe("HeroHeaderの単体テスト", () => {
  test("propsのtitleが表示される", () => {
    const { container } = render(<HeroHeader title="新着ワイン" />);
    expect(
      screen.getByRole("heading", { name: "新着ワイン" }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
