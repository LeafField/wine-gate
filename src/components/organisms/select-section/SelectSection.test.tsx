import { screen, render } from "@testing-library/react";
import SelectSection from "./SelectSection";
import { categoryFavoriteSmallArticleDummyData } from "../../../utils/dummyData";

describe("SelectSectionの単体テスト", () => {
  test("与えられたtitle及びchildren要素を元にコンポーネントが正しく描画される", () => {
    const { container } = render(
      <SelectSection
        wines={categoryFavoriteSmallArticleDummyData}
        title="渋い"
        link="sober"
      >
        タンニンが強さが強調されていたり、ブラックベリーやカシス、プルーン等黒系果実で表現される事も多い種類です。
        <br />
        タンニンは口の中で渋みを感じさせる成分であり、若いワインでは特に強く感じられることがあります。
        <br />
        カベルネ・ソーヴィニヨンやシラーなどの品種が一般的にこのタイプのワインに含まれます。
        <br />
        主に色が濃く重めの肉料理に合いやすいです。
      </SelectSection>,
    );
    expect(screen.getByRole("heading", { name: "渋い" })).toBeInTheDocument();
    expect(
      screen.getByText(
        /タンニンが強さが強調されていたり、ブラックベリーやカシス、プルーン等黒系果実で表現される事も多い種類です。/i,
      ),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("propsのwinesを元にコンポーネントが正しく描画される", () => {
    render(
      <SelectSection
        wines={categoryFavoriteSmallArticleDummyData}
        title="渋い"
        link="sober"
      />,
    );
    expect(
      screen.getByText(categoryFavoriteSmallArticleDummyData[0].title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(categoryFavoriteSmallArticleDummyData[1].title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(categoryFavoriteSmallArticleDummyData[2].title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(categoryFavoriteSmallArticleDummyData[3].title),
    ).toBeInTheDocument();
  });
});
