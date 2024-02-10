import React from "react";
import { render } from "@testing-library/react";
import Pill from "./Pill";

describe("Pillの単体テスト", () => {
  test("渡されたPropsに対して正しくレンダリングされているか", () => {
    const { getByText } = render(<Pill title="渋い" />);
    expect(getByText("渋い")).toBeInTheDocument();
  });

  describe("bigがtrueの場合", () => {
    test("text-baseのクラスが存在する", () => {
      const { getByText } = render(<Pill title="渋い" big />);
      expect(getByText("渋い")).toHaveClass("text-base");
    });
  });

  test("スナップショット", () => {
    const { container } = render(<Pill title="渋い" />);
    expect(container).toMatchSnapshot();
  });
});
