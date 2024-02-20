"use client";
import React, { FC, FormEvent, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import SearchButton from "../../atoms/search-button/SearchButton";
import SearchInput from "../../atoms/search-input/SearchInput";
import SearchSort from "../../atoms/search-sort/SearchSort";
import SearchCategory from "../../atoms/search-category/SearchCategory";
import { ComboboxData } from "@mantine/core";
import { searchSchema } from "../../../utils/schema";
import { useStore } from "../../../store";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  selectData: ComboboxData;
};

const SearchPanel: FC<Props> = ({ selectData }) => {
  const [errorState, setErrorState] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { menu } = useStore();
  const queryClient = useQueryClient();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputRef.current?.blur();
    queryClient.invalidateQueries({ queryKey: ["search"] });

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const schema = searchSchema.safeParse(data);
    if (schema.success) {
      const slug = schema.data;
      router.push(`/search?search=${slug.search}`);
      setErrorState(null);
    } else {
      setErrorState(schema.error.errors[0].message);
    }
  };

  return (
    <div
      className={`nav-panel max-tablet:animate-fadeIn ${menu === "free" ? "max-tablet:flex" : "max-tablet:hidden"}`}
      id="free-search-panel"
    >
      <h2 className="nav-title">フリーワード検索</h2>
      <form
        className="flex w-full flex-col items-end justify-end gap-y-3"
        onSubmit={submitHandler}
        role="search"
      >
        <SearchInput ref={inputRef} error={errorState} />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchPanel;
