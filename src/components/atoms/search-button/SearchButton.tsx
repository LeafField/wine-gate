import React from "react";

const SearchButton = () => {
  return (
    <button
      type="submit"
      className="border-2 border-gray px-3 py-1 transition-[border-color] duration-300 hover:border-blue focus:border-blue focus:outline-none"
    >
      検索
    </button>
  );
};

export default SearchButton;
