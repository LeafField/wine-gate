import {
  screen,
  render,
  waitFor,
  renderHook,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FreeButton from "./FreeButton";
import { useStore } from "../../../store";

describe("FreeButtonの結合テスト", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("close");
    });
  });

  test("初期状態ではフリーワード検索ボタンが表示されている", () => {
    const { container } = render(<FreeButton />);
    expect(screen.getByRole("button")).toHaveTextContent("フリーワード検索");
    expect(container).toMatchSnapshot();
  });

  test("フリーワード検索ボタンをクリックすると、閉じるボタンに変わる", async () => {
    render(<FreeButton />);
    await userEvent.click(screen.getByRole("button"));
    return expect(screen.getByRole("button")).toHaveTextContent("閉じる");
  });

  test("閉じるボタンをクリックすると、フリーワード検索ボタンに変わる", async () => {
    render(<FreeButton />);
    await userEvent.click(screen.getByRole("button", { name: "閉じる" }));
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent("フリーワード検索");
    });
  });
});
