import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { NativeSelect, ComboboxData } from "@mantine/core";
import { CategoryProps } from "../../../types/article_types";
import FlavorSlider from "../../atoms/flavor-slider/FlavorSlider";
import SweetSlider from "../../atoms/sweet-slider/SweetSlider";
import { UseFormReturnType } from "@mantine/form";
import { EditingPageSchemaType } from "../../../utils/schema";

type Categories = {
  categories: CategoryProps[];
  form: UseFormReturnType<EditingPageSchemaType>;
};

const TasteInput: FC<Categories> = ({ categories, form }) => {
  const data: ComboboxData = categories.map((category) => ({
    label: category.chara,
    value: category.id.toString(),
  }));

  const comboboxData: ComboboxData = [
    { value: "", label: "カテゴリーを選択してください" },
    ...data,
  ];

  return (
    <>
      <NativeSelect
        name="category_id"
        id="category"
        data={comboboxData}
        label="味のカテゴリー(選択必須)"
        required
        className="max-w-56"
        {...form.getInputProps("category_id")}
      />
      <fieldset className="mt-15">
        <legend>味のバランス{"(必須)"}</legend>
        {form.values.category_id !== "" &&
          categories[Number(form.values.category_id) - 1].sub === "red" &&
          form.values.category_id !== null && (
            <div className="mt-2">
              <p className="text-sm">渋味</p>
              <FlavorSlider name="sober_or_sweet" />
            </div>
          )}
        {form.values.category_id !== "" &&
          categories[Number(form.values.category_id) - 1].sub !== "red" && (
            <div className="mt-2">
              <p className="text-sm">甘味</p>
              <SweetSlider />
            </div>
          )}
        {form.values.category_id !== "" && (
          <div className="mt-8">
            <p className="text-sm">酸味</p>
            <FlavorSlider name="tart" />
          </div>
        )}
        {form.values.category_id !== "" && (
          <div className="mt-8">
            <p className="text-sm">風味</p>
            <FlavorSlider name="fruity" />
          </div>
        )}
      </fieldset>
    </>
  );
};

export default TasteInput;
