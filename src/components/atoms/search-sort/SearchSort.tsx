"use client";
import React, { useState } from "react";
import { Select, ComboboxData } from "@mantine/core";

const selectData = [
  {
    label: "新着順",
    value: "new",
  },
  {
    label: "価格が安い順",
    value: "inexpensive",
  },
  {
    label: "人気順",
    value: "popular",
  },
] satisfies ComboboxData;

const SearchSort = () => {
  const [select, setSelect] = useState<string>(selectData[0].value);
  const changeHandler = (value: string | null) => {
    if (value) {
      setSelect(value);
    }
  };

  return (
    <Select
      className="ml-auto w-2/3 [&>label]:block [&>label]:text-right"
      label="表示順"
      data={selectData}
      value={select}
      onChange={changeHandler}
      id="search-sort"
      name="sort"
    />
  );
};

export default SearchSort;
