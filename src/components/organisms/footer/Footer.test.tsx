import { render } from "@testing-library/react";
import Footer from "./Footer";
import { describe, test, expect } from "vitest";

describe("Footerの結合テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
