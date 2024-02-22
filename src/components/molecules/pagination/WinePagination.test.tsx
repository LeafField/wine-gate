import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WinePagination from "./WinePagination";
import { MantineProvider } from "@mantine/core";
import * as router from "next/navigation";

jest.mock("next/navigation");

describe("WinePagination", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("正しくレンダリングがされている", () => {
    const { container } = render(
      <WinePagination totalPages={10} categorySlug="red" sort="new" />,
      {
        wrapper: MantineProvider,
      },
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("ページネーションがクリックされた時にrouter.pushが呼ばれる", async () => {
    expect.assertions(1);
    const mockPush = jest.fn();
    jest.spyOn(router, "useRouter").mockImplementationOnce(() => ({
      push: mockPush,
      back: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }));
    render(<WinePagination totalPages={10} categorySlug="red" sort="new" />, {
      wrapper: MantineProvider,
    });
    await userEvent.click(screen.getByText("2"));
    return expect(mockPush).toHaveBeenCalledWith("/category/red/new/2");
  });
});
