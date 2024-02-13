import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as router from "next/navigation";
import BackLink from "./BackLink";

jest.mock("next/navigation");

describe("BackLinkコンポーネントの単体テスト", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("戻るボタンが正しく表示されているか", () => {
    expect.assertions(3);
    const { container } = render(<BackLink />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("前のページに戻る")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("戻るボタンをクリックしたときにrouter.backが呼ばれるか", async () => {
    expect.assertions(1);
    const backMock = jest.fn();
    jest.spyOn(router, "useRouter").mockImplementation(() => ({
      back: backMock,
      forward: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      refresh: jest.fn(),
    }));

    render(<BackLink />);
    await userEvent.click(screen.getByRole("button"));
    return expect(backMock).toHaveBeenCalled();
  });
});
