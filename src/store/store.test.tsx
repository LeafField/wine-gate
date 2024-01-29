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
});
