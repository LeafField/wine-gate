import React, { ChangeEvent, FC, useState } from "react";
import { Input, CloseButton, TextInput } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type Props = {
  error: string | null;
};

const SearchInput: FC<Props> = ({ error }) => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      className="w-full focus:border-blue"
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
      error={error}
      withErrorStyles={false}
      id="search"
    />
  );
};

export default SearchInput;
