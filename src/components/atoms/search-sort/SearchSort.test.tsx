import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchSort from "./SearchSort";
import { MantineProvider } from "@mantine/core";

describe("SearchSortコンポーネント", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    window.ResizeObserver = ResizeObserver;
  });

  it("正しくレンダリングされる", () => {
    render(<SearchSort />, { wrapper: MantineProvider });
    expect(screen.getByText("表示順")).toBeInTheDocument();
  });

  it("選択値が変更時に更新される", async () => {
    render(<SearchSort />, { wrapper: MantineProvider });
    const select = await screen.getByDisplayValue<HTMLInputElement>("新着順");
    await userEvent.click(select);
    const option = await screen.getByText("人気順");
    await userEvent.click(option);
    await waitFor(() => {
      expect(select).toHaveValue("人気順");
    });
  });
});
