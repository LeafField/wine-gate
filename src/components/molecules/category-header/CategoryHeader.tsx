"use client";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { NativeSelect } from "@mantine/core";

type Props = {
  title: string;
  sort?: string;
  setSort?: Dispatch<SetStateAction<string>>;
};

const CategoryHeader: FC<Props> = ({ title, sort, setSort }) => {
  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!setSort) return;
    setSort(event.target.value);
  };

  return (
    <div className="mx-4 flex flex-col-reverse justify-between gap-y-2 border-b-2 border-red sort tablet:mx-0 tablet:w-[calc(var(--vw)-401px)] tablet:flex-row tablet:items-center">
      <h2 className="text-heading2">{title}</h2>
      <NativeSelect
        data={[
          { value: "popular", label: "人気順" },
          { value: "new", label: "新着順" },
          { value: "inexpensive", label: "価格が安い順" },
        ]}
        className="block w-48"
        value={sort}
        onChange={changeHandler}
        id="sort-select"
      />
    </div>
  );
};

export default CategoryHeader;
