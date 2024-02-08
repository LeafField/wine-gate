import {
  screen,
  render,
  renderHook,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";
import * as router from "next/navigation";
import { useStore } from "../../../store";
import { ProviderWrapper } from "../../test-components/ProviderWrapper";

jest.mock("../../../utils/supabase", () => {
  return {
    supabase: {
      auth: {
        signOut: jest.fn(),
      },
    },
  };
});

jest.mock("next/navigation");

describe("Navigationの結合テスト", () => {
  beforeEach(() => {
    jest.spyOn(router, "useRouter").mockImplementation(() => ({
      push: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn(),
      pathname: "/",
      route: "/",
      query: {},
      asPath: "/",
      basePath: "",
      forward: jest.fn(),
      refresh: jest.fn(),
    }));

    render(<Navigation />, {
      wrapper: ProviderWrapper,
    });
  });
  beforeAll(() => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.setMenu("close");
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("会員メニューのボタンを押したときに、会員メニューのパネルが表示される", async () => {
    expect.assertions(1);

    const button = screen.getByRole("button", { name: "会員メニュー" });
    await userEvent.click(button);
    const panel = await screen.getByRole("heading", { name: "会員メニュー" });
    await waitFor(() => {
      expect(panel).toBeInTheDocument();
    });
  });

  test("フリーワード検索のボタンを押したときに、フリーワード検索のパネルが表示される", async () => {
    expect.assertions(1);

    const button = screen.getByRole("button", { name: "フリーワード検索" });
    await userEvent.click(button);
    const panel = await screen.getByRole("heading", {
      name: "フリーワード検索",
    });
    await waitFor(() => {
      expect(panel).toBeInTheDocument();
    });
  });

  test("カテゴリー検索のボタンを押したときに、カテゴリー検索のパネルが表示される", async () => {
    expect.assertions(1);

    const button = screen.getByRole("button", { name: "カテゴリー検索" });
    await userEvent.click(button);
    const panel = await screen.getByRole("heading", {
      name: "カテゴリー検索",
    });
    await waitFor(() => {
      expect(panel).toBeInTheDocument();
    });
  });
});
