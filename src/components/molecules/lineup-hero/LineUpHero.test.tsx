import { screen, render } from "@testing-library/react";
import LineUpHero from "./LineUpHero";

jest.mock("next/navigation");

describe("LineUpHeroの単体テスト", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("LineUpHeroコンポーネントが存在することを確認する", () => {
    const { container } = render(<LineUpHero title="ワイン検索" />);
    expect(screen.getByText("ワイン検索")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
