import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogoutButton from "./LogoutButton";
import { supabase } from "../../../utils/supabase";

jest.mock("../../../utils/supabase", () => {
  return {
    supabase: {
      auth: {
        signOut: jest.fn(),
      },
    },
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("LogoutButtonの単体テスト", () => {
  test("ログアウトボタンが正しくレンダリングされている", () => {
    render(<LogoutButton />);
    expect(screen.getByText("ログアウト")).toBeInTheDocument();
  });

  test("ログアウトボタンを押したとき、logoutMockが呼ばれる", async () => {
    expect.assertions(1);
    render(<LogoutButton />);
    const logoutMock = jest.fn();
    jest.spyOn(supabase.auth, "signOut").mockImplementation(logoutMock);
    await userEvent.click(screen.getByText("ログアウト"));
    await waitFor(() => {
      expect(logoutMock).toHaveBeenCalled();
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(<LogoutButton />);
    expect(container).toMatchSnapshot();
  });
});
