"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  console.log(search, category, sort);
  return <div>Search</div>;
};

export default Search;
