"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "@mantine/core";

type Props = {
  activePage?: number;
  totalPages: number;
  categorySlug: string;
  sort: string;
};

const WinePagination: FC<Props> = ({
  activePage = 1,
  totalPages,
  categorySlug,
  sort,
}) => {
  const router = useRouter();

  const changeHandler = (value: number) => {
    router.push(`/category/${categorySlug}/${sort}/${value}`);
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
