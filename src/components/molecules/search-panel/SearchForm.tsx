"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import SearchButton from "../../atoms/search-button/SearchButton";
import SearchInput from "../../atoms/search-input/SearchInput";
import SearchSort from "../../atoms/search-sort/SearchSort";
import SearchCategory from "../../atoms/search-category/SearchCategory";
import { ComboboxData } from "@mantine/core";
import { searchSchema } from "../../../utils/schema";

type Props = {
  selectData: ComboboxData;
};

const SearchPanel: FC<Props> = ({ selectData }) => {
  const router = useRouter();

  const submitAction = async (_: string | null, formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const schema = searchSchema.safeParse(data);
    if (schema.success) {
      const slug = schema.data;
      router.push(
        `/search?sort=${slug.sort}&category=${slug.category}&search=${slug.search}`,
      );
      return null;
    } else {
      return schema.error.errors[0].message;
    }
  };

  const [errorState, formAction] = useFormState(submitAction, "");

  return (
    <div className="nav-panel">
      <h2 className="nav-title">フリーワード検索</h2>
      <form
        className="flex w-full flex-col items-end justify-end gap-y-3"
        action={formAction}
      >
        <SearchInput error={errorState} />
        <SearchSort />
        <SearchCategory selectData={selectData} />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchPanel;
