import { screen, render, waitFor, getByText } from "@testing-library/react";
import SearchCategory from "./SearchCategory";
import userEvent from "@testing-library/user-event";
import { selectDummyData } from "../../../utils/dummyData";
import { MantineProvider } from "@mantine/core";

describe("Searchカテゴリーの単体テスト", () => {
  test("コンポーネントが正しくレンダリングされているか", () => {
    render(<SearchCategory selectData={selectDummyData} />, {
      wrapper: MantineProvider,
    });
    const select = screen.getByDisplayValue("全て");
    expect(select).toBeInTheDocument();
  });

  test("カテゴリーを選択した際、正しくvalueが書き換わっているか", async () => {
    expect.assertions(1);
    render(<SearchCategory selectData={selectDummyData} />, {
      wrapper: MantineProvider,
    });
    const select = screen.getByDisplayValue("全て");
    await userEvent.click(select);
    await userEvent.click(screen.getByText("辛口白"));
    await waitFor(() => {
      expect(select).toHaveValue("辛口白");
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(
      <SearchCategory selectData={selectDummyData} />,
      {
        wrapper: MantineProvider,
      },
    );
    expect(container).toMatchSnapshot();
  });
});
