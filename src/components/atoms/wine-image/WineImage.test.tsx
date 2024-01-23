import { render } from "@testing-library/react";
import WineImage from "./WineImage";
import { describe, test, expect } from "vitest";

describe("WineImage 単体テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<WineImage src={"/dummy.jpeg"} />);
    expect(container).toMatchSnapshot();
  });
});
