import { screen, render, renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import { useStore } from "../../../store";

describe("Modalの単体テスト", () => {
  beforeAll(() => {
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
  });

  test("初期状態では、何も表示されない", () => {
    render(<Modal />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("setModalでメッセージが追加された際、showModalが実行される", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setModal(["メッセージ1", "メッセージ2"]);
    });
    render(<Modal />);
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  test("閉じるボタンを押すと、dialogが非表示になる", async () => {
    const { container } = render(<Modal />);

    container.children[0].setAttribute("open", "true");
    await userEvent.click(screen.getByRole("button"));
    return expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
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
