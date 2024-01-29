import { screen, render } from "@testing-library/react";
import UserPanel from "./UserPanel";
import { useEffect } from "react";
import { useStore } from "../../../store";

const TestWrapper = ({ login }: { login: boolean }) => {
  const { setUser, logout } = useStore();
  useEffect(() => {
    if (login) {
      setUser({
        id: "fadskjh",
        email: "test@test.com",
        username: "テストユーザー",
      });
    } else {
      logout();
    }
  }, [login, setUser, logout]);
  return (
    <>
      <UserPanel />
    </>
  );
};

jest.mock("../../../utils/supabase", () => {
  return {
    supabase: {
      auth: {
        signOut: jest.fn(),
      },
    },
  };
});

describe("UserPanelの結合テスト", () => {
  test("ログインしていない場合、ログインボタンが表示される", () => {
    render(<TestWrapper login={false} />);
    expect(screen.getByText("ログイン/会員登録")).toBeInTheDocument();
  });

  test("ログインしている状態で各コンポーネントが正しく表示されているか", () => {
    render(<TestWrapper login={true} />);
    expect(screen.getByText("ようこそテストユーザー様")).toBeInTheDocument();
    expect(screen.getByText("ワイン記事を投稿する")).toBeInTheDocument();
    expect(screen.getByText("投稿記事一覧")).toBeInTheDocument();
    expect(screen.getByText("お気に入りのワイン")).toBeInTheDocument();
    expect(screen.getByText("ログアウト")).toBeInTheDocument();
  });
});
