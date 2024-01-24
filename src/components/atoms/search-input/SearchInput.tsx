import React, { ChangeEvent, useState } from "react";
import { Input, CloseButton } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      className="panel-inner focus:border-blue"
      leftSection={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      rightSection={
        <CloseButton
          onClick={() => setValue("")}
          className={`${value ? undefined : "hidden"} relative z-10 cursor-pointer`}
        />
      }
      rightSectionPointerEvents="all"
      value={value}
      onChange={changeHandler}
      placeholder="検索"
      name="search"
      aria-label="search"
    />
  );
};

export default SearchInput;
