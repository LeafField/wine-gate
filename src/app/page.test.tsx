import { render, screen } from "@testing-library/react";
import Home from "./page";

const sum = (a: number, b: number) => {
  return a + b;
};

describe("Jestの実行テスト", () => {
  test("1+1が正しく実行できるか", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("react-domが正しくレンダリングされるか", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Hello World", level: 1 })
    ).toBeInTheDocument();
  });
});
