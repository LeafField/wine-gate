import React, { FC } from "react";
import Link from "next/link";

type Props = {
  src: string;
  title: string;
};

const CategoryLink: FC<Props> = ({ src, title }) => {
  return (
    <Link
      className="flex h-10 w-fit items-center justify-center border border-gray px-4"
      href={`/${src}`}
      prefetch={false}
    >
      {title}
    </Link>
  );
};

export default CategoryLink;
