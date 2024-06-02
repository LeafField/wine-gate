import { screen, render } from "@testing-library/react";
import MyPage from "./MyPage";
import { wineTitleDummyData } from "../../../utils/dummyData";

jest.mock("next/navigation");

describe("MyPageの単体テスト", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("MyPageコンポーネントが存在することを確認する", () => {
    const { container } = render(<MyPage articles={wineTitleDummyData} />);
    expect(screen.getByText(wineTitleDummyData[0].title)).toBeInTheDocument();
    expect(screen.getByText(wineTitleDummyData[1].title)).toBeInTheDocument();
    expect(screen.getByText(wineTitleDummyData[2].title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
