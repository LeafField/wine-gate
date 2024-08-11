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
      <WinePagination totalPages={10} activePage={1} setPage={jest.fn} />,
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

  test("ページネーションをクリックした時、setPageにクリックしたページの数値が入力される", async () => {
    expect.assertions(1);
    const setPage = jest.fn();
    render(
      <WinePagination totalPages={10} activePage={1} setPage={setPage} />,
      {
        wrapper: MantineProvider,
      },
    );
    await userEvent.click(screen.getByText("2"));
    expect(setPage).toHaveBeenCalledWith(2);
  });
});
