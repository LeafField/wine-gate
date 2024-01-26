import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchSort from "./SearchSort";
import { MantineProvider } from "@mantine/core";

describe("SearchSortコンポーネント", () => {
  test("正しくレンダリングされる", () => {
    render(<SearchSort />, { wrapper: MantineProvider });
    expect(screen.getByText("表示順")).toBeInTheDocument();
  });

  test("選択値が変更時に更新される", async () => {
    expect.assertions(1);
    render(<SearchSort />, { wrapper: MantineProvider });
    const select = await screen.getByDisplayValue<HTMLInputElement>("新着順");
    await userEvent.click(select);
    const option = await screen.getByText("人気順");
    await userEvent.click(option);
    await waitFor(() => {
      expect(select).toHaveValue("人気順");
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(<SearchSort />, { wrapper: MantineProvider });
    expect(container).toMatchSnapshot();
  });
});
