"use client";
import React, { Suspense } from "react";
import SearchPage from "../../../components/template/search-page/SearchPage";

const Search = () => {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
