"use client";
import React, { ChangeEvent, FC } from "react";
import { NativeSelect } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";

type Props = {
  title: string;
};

const CategoryHeader: FC<Props> = ({ title }) => {
  const router = useRouter();
  const params = useParams<{ category: string[] }>();

  const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    router.push(`/category/${params.category[0]}/${event.target.value}/1`);
  };

  return (
    <div className="flex flex-col-reverse justify-between gap-y-2 border-b-2 border-red tablet:flex-row tablet:items-center">
      <h2 className="text-heading2">{title}</h2>
      <NativeSelect
        data={[
          { value: "new", label: "新着順" },
          { value: "inexpensive", label: "価格が安い順" },
          { value: "popular", label: "人気順" },
        ]}
        className="block w-48"
        value={params && params.category[1] ? params.category[1] : "new"}
        onChange={changeHandler}
      />
    </div>
  );
};

export default CategoryHeader;
