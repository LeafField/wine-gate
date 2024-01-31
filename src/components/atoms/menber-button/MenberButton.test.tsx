import {
  screen,
  render,
  waitFor,
  renderHook,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenberButton from "./MenberButton";
import { useStore } from "../../../store";

describe("MenberButtonの結合テスト", () => {
  beforeAll(() => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("close");
    });
  });

  test("初期状態では会員メニューのボタンが表示されている", () => {
    const { container } = render(<MenberButton />);
    expect(screen.getByRole("button")).toHaveTextContent("会員メニュー");
    expect(container).toMatchSnapshot();
  });

  test("会員メニューのボタンをクリックすると、会員メニューのボタンが閉じるボタンに変わる", async () => {
    render(<MenberButton />);
    await userEvent.click(screen.getByRole("button"));
    return expect(screen.getByRole("button")).toHaveTextContent("閉じる");
  });

  test("閉じるボタンをクリックすると、会員メニューのボタンに変わる", async () => {
    render(<MenberButton />);
    await userEvent.click(screen.getByRole("button", { name: "閉じる" }));
    await waitFor(() => {
      expect(screen.getByRole("button")).toHaveTextContent("会員メニュー");
    });
  });
});
