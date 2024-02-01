import { renderHook, act } from "@testing-library/react";
import { useStore } from "./index";

const testUser = {
  id: "fdskl",
  email: "user@test.com",
  username: "テストユーザー",
};

describe("useStoreの単体テスト", () => {
  test("初期のuserの値がnullであること", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.user).toBeNull();
  });

  test("setUserを実行した時、userの値が更新されること", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setUser(testUser);
    });
    expect(result.current.user).toEqual(testUser);
  });

  test("setUserを実行しuserの値を更新した後、logoutを実行するとuserの値がnullになること", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setUser(testUser);
      result.current.logout();
    });
    expect(result.current.user).toBeNull();
  });

  test("menuの初期値がcloseである事", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.menu).toBe("close");
  });

  test("setMenuを実行した時、menuの値が期待された値に更新されること", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("category");
    });
    expect(result.current.menu).toBe("category");
  });

  test("modalの初期値が空の配列であること", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.modal).toEqual([]);
  });

  test("setModalを実行した時、modalの値が期待された値に更新されること", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setModal(["メッセージ1", "メッセージ2"]);
    });
    expect(result.current.modal).toEqual(["メッセージ1", "メッセージ2"]);
  });

  test("clearModalを実行した時、modalの値が空の配列になること", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setModal(["メッセージ1", "メッセージ2"]);
      result.current.clearModal();
    });
    expect(result.current.modal).toEqual([]);
  });
});
