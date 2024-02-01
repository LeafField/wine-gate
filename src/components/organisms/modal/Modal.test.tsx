import { screen, render, renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { useStore } from "../../../store";

describe("Modalの単体テスト", () => {
  test("初期状態では、何も表示されない", () => {
    render(<Modal />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("setModalを実行すると、dialogが表示される", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setModal(["メッセージ1", "メッセージ2"]);
    });
    render(<Modal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("メッセージ1")).toBeInTheDocument();
    expect(screen.getByText("メッセージ2")).toBeInTheDocument();
  });

  test("閉じるボタンを押すと、dialogが非表示になる", async () => {
    render(<Modal />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("スナップショットテスト", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setModal([
        "ご登録いただいたメールアドレスへ確認メールを送信しました。",
        "メール内のリンクより登録を完了してください。",
      ]);
    });

    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
