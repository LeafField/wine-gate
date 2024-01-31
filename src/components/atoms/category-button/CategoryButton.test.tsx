import {
  screen,
  render,
  waitFor,
  renderHook,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryButton from "./CategoryButton";
import { useStore } from "../../../store";

describe("CategoryButtonの結合テスト", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("close");
    });
  });

  test("初期状態ではカテゴリー検索ボタンが表示されている", () => {
    const { container } = render(<CategoryButton />);
    expect(screen.getByRole("button")).toHaveTextContent("カテゴリー検索");
    expect(container).toMatchSnapshot();
  });

  test("カテゴリー検索ボタンをクリックすると、閉じるボタンに変わる", async () => {
    render(<CategoryButton />);
    await userEvent.click(screen.getByRole("button"));
    return expect(screen.getByRole("button")).toHaveTextContent("閉じる");
  });

  test("閉じるボタンをクリックすると、カテゴリー検索ボタンに変わる", async () => {
    render(<CategoryButton />);
    await userEvent.click(screen.getByRole("button", { name: "閉じる" }));
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent("カテゴリー検索");
    });
  });
});
