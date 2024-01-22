import React from "react";
import { render } from "@testing-library/react";
import Pill from "./Pill";

describe("Pill component", () => {
  test("renders Pill component with title", () => {
    const { getByText } = render(<Pill title="渋い" />);
    expect(getByText("渋い")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<Pill title="渋い" />);
    expect(container).toMatchSnapshot();
  });
});
