"use client";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@mantine/core";

type Props = {
  activePage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const WinePagination: FC<Props> = ({ activePage, totalPages, setPage }) => {
  const changeHandler = (value: number) => {
    setPage(value);
  };
  return (
    <div className="flex justify-center">
      <Pagination
        total={totalPages}
        value={activePage}
        onChange={changeHandler}
      />
    </div>
  );
};

export default WinePagination;
