import React, { ChangeEvent, forwardRef } from "react";
import { CloseButton, TextInput } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store";

type Props = {
  error: string | null;
};

const SearchInput = forwardRef<HTMLInputElement, Props>(({ error }, ref) => {
  const { searchValue, setSearchValue } = useStore();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <TextInput
      ref={ref}
      className="w-full focus:border-blue"
      leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      rightSection={
        searchValue.length > 0 && (
          <CloseButton
            onClick={() => setSearchValue("")}
            className={`relative z-10 cursor-pointer`}
          />
        )
      }
      rightSectionPointerEvents="all"
      value={searchValue}
      onChange={changeHandler}
      placeholder="検索"
      name="search"
      aria-label="search"
      error={error}
      withErrorStyles={false}
      id="search"
    />
  );
});

export default SearchInput;

SearchInput.displayName = "SearchInput";
