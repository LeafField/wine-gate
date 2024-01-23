import React from "react";
import { render } from "@testing-library/react";
import Pill from "./Pill";
import { describe, test, expect } from "vitest";

describe("Pillの単体テスト", () => {
  test("渡されたPropsに対して正しくレンダリングされているか", () => {
    const { getByText } = render(<Pill title="渋い" />);
    expect(getByText("渋い")).toBeDefined();
  });

  test("スナップショット", () => {
    const { container } = render(<Pill title="渋い" />);
    expect(container).toMatchSnapshot();
  });
});
