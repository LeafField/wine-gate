import React, { FC } from "react";
import Link from "next/link";

type Props = {
  title: string;
  id: string;
};

const WineTitle: FC<Props> = ({ id, title }) => {
  return (
    <Link
      href={`/article/${id}`}
      className="block border border-gray px-2 py-4 transition-colors duration-300 hover:border-blue"
    >
      <div className="line-clamp-2 h-full w-full text-heading3">{title}</div>
    </Link>
  );
};

export default WineTitle;
