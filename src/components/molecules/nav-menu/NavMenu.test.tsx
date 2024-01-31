import {
  screen,
  render,
  renderHook,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavMenu from "./NavMenu";
import { useStore } from "../../../store";

describe("NavMenuの結合テスト", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("close");
    });
  });

  test("初期状態では会員メニュー、フリーワード検索、カテゴリー検索のボタンが表示されている", () => {
    const { container } = render(<NavMenu />);
    expect(
      screen.getByRole("button", { name: "会員メニュー" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "フリーワード検索" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "カテゴリー検索" }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("会員メニューのボタンをクリックすると、会員メニューのボタンが閉じるボタンに変わる", async () => {
    expect.assertions(3);
    render(<NavMenu />);
    await userEvent.click(screen.getByRole("button", { name: "会員メニュー" }));
    await waitFor(() => {
      expect(screen.getByText("閉じる")).toBeInTheDocument();
      expect(screen.getByText("フリーワード検索")).toBeInTheDocument();
      expect(screen.getByText("カテゴリー検索")).toBeInTheDocument();
    });
  });

  test("閉じるボタンをクリックすると、会員メニューのボタンに変わる", async () => {
    render(<NavMenu />);
    await userEvent.click(screen.getByRole("button", { name: "閉じる" }));
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "会員メニュー" }),
      ).toBeInTheDocument();
    });
  });

  test("フリーワード検索ボタンをクリックすると、閉じるボタンに変わる", async () => {
    render(<NavMenu />);
    await userEvent.click(
      screen.getByRole("button", { name: "フリーワード検索" }),
    );
    return expect(screen.getByText("閉じる")).toBeInTheDocument();
  });

  test("閉じるボタンをクリックすると、フリーワード検索ボタンに変わる", async () => {
    render(<NavMenu />);
    await userEvent.click(screen.getByRole("button", { name: "閉じる" }));
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "フリーワード検索" }),
      ).toBeInTheDocument();
    });
  });
});
