import React, { ChangeEvent, FC, useState } from "react";
import { NativeSelect, ComboboxData } from "@mantine/core";
import { CategoryProps } from "../../../types/article_types";
import FlavorSlider from "../../atoms/flavor-slider/FlavorSlider";
import SweetSlider from "../../atoms/sweet-slider/SweetSlider";

type Categories = {
  categories: CategoryProps[];
};

const TasteInput: FC<Categories> = ({ categories }) => {
  const [isRed, setIsRed] = useState<CategoryProps["sub"] | null>(null);

  const data: ComboboxData = categories.map((category) => ({
    label: category.chara,
    value: category.id.toString(),
  }));

  const comboboxData: ComboboxData = [
    { value: "", label: "カテゴリーを選択してください" },
    ...data,
  ];

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value.length !== 0) {
      setIsRed(categories[Number(event.target.value) - 1].sub);
    } else if (event.target.value.length === 0) {
      setIsRed(null);
    }
  };

  return (
    <>
      <NativeSelect
        name="category_id"
        id="category"
        data={comboboxData}
        onChange={changeHandler}
        label="味のカテゴリー(選択必須)"
        required
      />
      <fieldset className="mt-15">
        <legend>味のバランス{"(必須)"}</legend>
        {isRed === "red" && isRed !== null && (
          <div className="mt-2">
            <p className="text-sm">渋味</p>
            <FlavorSlider name="sober_or_sweet" />
          </div>
        )}
        {isRed !== "red" && isRed !== null && (
          <div className="mt-2">
            <p className="text-sm">甘味</p>
            <SweetSlider />
          </div>
        )}
        {isRed !== null && (
          <div className="mt-8">
            <p className="text-sm">酸味</p>
            <FlavorSlider name="tart" />
          </div>
        )}
        {isRed !== null && (
          <div className="mt-8">
            <p className="text-sm">フルーティー</p>
            <FlavorSlider name="fruity" />
          </div>
        )}
      </fieldset>
    </>
  );
};

export default TasteInput;
