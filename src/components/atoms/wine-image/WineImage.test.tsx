import { render } from "@testing-library/react";
import WineImage from "./WineImage";
import dummyImage from "../../../images/dummy_wine.png";

describe("WineImage 単体テスト", () => {
  test("スナップショット", () => {
    const { container } = render(<WineImage src={dummyImage.src} />);
    expect(container).toMatchSnapshot();
  });
});
