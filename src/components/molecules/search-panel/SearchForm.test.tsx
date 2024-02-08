import { render, screen, waitFor } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { selectDummyData } from "../../../utils/dummyData";
import * as router from "next/navigation";
import userEvent from "@testing-library/user-event";
import { ProviderWrapper } from "../../test-components/ProviderWrapper";

jest.mock("next/navigation");
const mockRouterPush = jest.fn();

describe("SearchFormの結合テスト", () => {
  beforeEach(() => {
    jest.spyOn(router, "useRouter").mockImplementation(() => ({
      push: mockRouterPush,
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

    render(<SearchForm selectData={selectDummyData} />, {
      wrapper: ProviderWrapper,
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("コンポーネントがクラッシュせずにレンダリングされる", () => {
    const formElement = screen.getByRole("search");
    expect(formElement).toBeInTheDocument();
  });

  test("正常系:submitActionが正しく動作しrouter.pushが実行される", async () => {
    const textBox = screen.getByRole("textbox", { name: "search" });
    const submitButton = screen.getByRole("button", { name: "検索" });
    await userEvent.type(textBox, "コノスル");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith(
        "/search?sort=new&category=&search=コノスル",
      );
    });
  });

  test("異常系:inputタグの入力が4文字未満の時、バリデーションエラーを表示する", async () => {
    const textBox = screen.getByRole("textbox", { name: "search" });
    const submitButton = screen.getByRole("button", { name: "検索" });
    await userEvent.type(textBox, "コノス");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("4文字以上入力してください")).toBeInTheDocument();
    });
  });

  test("スナップショットテスト", () => {
    const { container } = render(<SearchForm selectData={selectDummyData} />, {
      wrapper: ProviderWrapper,
    });
    expect(container).toMatchSnapshot();
  });
});
