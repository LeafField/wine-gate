import React, { FC } from "react";
import Link from "next/link";

type Props = {
  wine_id: string;
};

const EditingLink: FC<Props> = ({ wine_id }) => {
  return (
    <Link
      className="block w-fit bg-blue/90 px-3 py-[0.375rem] text-white transition-colors duration-300 hover:bg-blue"
      href={`/editing/${wine_id}`}
      prefetch={false}
    >
      記事編集
    </Link>
  );
};

export default EditingLink;
