"use client";
import React, { FC, useState } from "react";
import { Select, ComboboxData } from "@mantine/core";

type Props = {
  selectData: ComboboxData;
};

const SearchCategory: FC<Props> = ({ selectData }) => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (value: string | null) => {
    if (value !== null) {
      setValue(value);
    }
  };

  const selectDataPlus: ComboboxData = [
    { value: "", label: "全て" },
    ...selectData,
  ];

  return (
    <Select
      className="ml-auto w-2/3 [&>label]:block [&>label]:text-right"
      data={selectDataPlus}
      label="カテゴリー"
      value={value}
      onChange={changeHandler}
      styles={{ dropdown: { maxHeight: 200, overflowY: "auto" } }}
      withScrollArea={false}
      id="search-category"
      name="category"
    />
  );
};

export default SearchCategory;
