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
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(screen.getByText("新着ワイン")).toBeInTheDocument();
    expect(screen.getByDisplayValue("人気順")).toBeInTheDocument();
  });

  test("CategoryHeaderのセレクトボックスの選択肢が正しく表示される", async () => {
    jest
      .spyOn(nextRouter, "useParams")
      .mockReturnValue({ category: ["sober", "new", "1"] });
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });

    await userEvent.click(screen.getByDisplayValue("人気順"));
    await waitFor(() => {
      expect(screen.getByText("新着順")).toBeInTheDocument();
      expect(screen.getByText("価格が安い順")).toBeInTheDocument();
      expect(screen.getByText("人気順")).toBeInTheDocument();
    });
  });

  test("CategoryHeaderのセレクトボックスの選択肢を変更すると、setSortが呼ばれる", async () => {
    const mockSort = jest.fn();
    render(<CategoryHeader setSort={mockSort} title="新着ワイン" />, {
      wrapper: MantineProvider,
    });

    await userEvent.selectOptions(screen.getByDisplayValue("人気順"), "new");
    return expect(mockSort).toHaveBeenCalledWith("new");
  });

  test("sortのクエリパラメータがnullの場合、デフォルトで人気順が選択される", () => {
    render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(screen.getByDisplayValue("人気順")).toBeInTheDocument();
  });

  test("setSortを渡していない場合、ソートが実行されない", async () => {
    render(<CategoryHeader title="新着ワイン" sort="popular" />, {
      wrapper: MantineProvider,
    });
    await userEvent.selectOptions(screen.getByDisplayValue("人気順"), "new");
  });

  test("スナップショットテスト", () => {
    const { container } = render(<CategoryHeader title="新着ワイン" />, {
      wrapper: MantineProvider,
    });
    expect(container).toMatchSnapshot();
  });
});
