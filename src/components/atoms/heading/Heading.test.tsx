import { render, screen } from "@testing-library/react";
import Heading from "./Heading";
import { describe, test, expect } from "vitest";

describe("Headingの単体テスト", () => {
  test("タイトルが正しく表示される", () => {
    const testTitle = "テストタイトル";
    render(<Heading title={testTitle} />);
    const headingElement = screen.getByText(testTitle);
    expect(headingElement).toBeDefined();
  });

  test("スナップショットテスト", () => {
    const testTitle = "テストタイトル";
    const { container } = render(<Heading title={testTitle} />);
    expect(container).toMatchSnapshot();
  });
});
