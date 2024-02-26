import { screen, render } from "@testing-library/react";
import SelectHero from "./SelectHero";

describe("SelectHeroの単体テスト", () => {
  test("SelectHeroコンポーネントが存在することを確認する", () => {
    const { container } = render(<SelectHero title="ワインの簡単な選び方" />);
    expect(screen.getByText("ワインの簡単な選び方")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
