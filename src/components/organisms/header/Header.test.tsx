import { render } from "@testing-library/react";
import Header from "./Header";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  afterEach,
  Mock,
} from "vitest";

describe("HeaderTitleの単体テスト", () => {
  beforeEach(() => {
    vi.mock("../../../utils/font.ts", () => ({
      notoStyle: vi.fn(),
      KumarOne: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("スナップショット", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
