import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryHeader from "./CategoryHeader";
import * as nextRouter from "next/navigation";
import { MantineProvider } from "@mantine/core";

jest.mock("next/navigation");

describe("CategoryHeaderの単体テスト", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("CategoryHeaderが正しく表示される", () => {
    jest
      .spyOn(nextRouter, "useParams")
      .mockReturnValue({ category: ["sober", "new", "1"] });
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(screen.getByText("新着ワイン")).toBeInTheDocument();
    expect(screen.getByDisplayValue("新着順")).toBeInTheDocument();
  });

  test("CategoryHeaderのセレクトボックスの選択肢が正しく表示される", async () => {
    jest
      .spyOn(nextRouter, "useParams")
      .mockReturnValue({ category: ["sober", "new", "1"] });
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });

    await userEvent.click(screen.getByDisplayValue("新着順"));
    await waitFor(() => {
      expect(screen.getByText("新着順")).toBeInTheDocument();
      expect(screen.getByText("価格が安い順")).toBeInTheDocument();
      expect(screen.getByText("人気順")).toBeInTheDocument();
    });
  });

  test("CategoryHeaderのセレクトボックスの選択肢を変更すると、router.pushが呼ばれる", async () => {
    jest
      .spyOn(nextRouter, "useParams")
      .mockReturnValue({ category: ["sober", "new", "1"] });
    const pushMock = jest.fn();
    jest.spyOn(nextRouter, "useRouter").mockReturnValue({
      push: pushMock,
    } as any);
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });

    await userEvent.selectOptions(
      screen.getByDisplayValue("新着順"),
      "popular",
    );
    expect(pushMock).toHaveBeenCalledWith("/category/sober/popular/1");
  });

  test("params.category[1]がundefinedの場合、デフォルトで新着順が選択される", () => {
    jest
      .spyOn(nextRouter, "useParams")
      .mockReturnValue({ category: ["sober"] });
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(screen.getByDisplayValue("新着順")).toBeInTheDocument();
  });

  test("スナップショットテスト", () => {
    const { container } = render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(container).toMatchSnapshot();
  });
});
