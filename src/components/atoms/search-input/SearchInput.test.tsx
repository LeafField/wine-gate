import { render, fireEvent, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { MantineProvider } from "@mantine/core";

describe("SearchInputの単体テスト", () => {
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
  });

  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    render(<SearchInput />, { wrapper: MantineProvider });
    const inputElement = screen.getByRole("textbox", {
      name: "search",
    });
    expect(inputElement).toBeInTheDocument();
  });

  test("ユーザーの入力が正しく反映される", () => {
    render(<SearchInput />, { wrapper: MantineProvider });
    const inputElement = screen.getByRole<HTMLInputElement>("textbox", {
      name: "search",
    });
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  test("クローズボタンをクリックすると入力がクリアされる", () => {
    render(<SearchInput />, { wrapper: MantineProvider });
    const inputElement = screen.getByRole<HTMLInputElement>("textbox", {
      name: "search",
    });
    fireEvent.change(inputElement, { target: { value: "test" } });
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(inputElement.value).toBe("");
  });

  test("スナップショットテスト", () => {
    const { container } = render(<SearchInput />, { wrapper: MantineProvider });
    expect(container).toMatchSnapshot();
  });
});
