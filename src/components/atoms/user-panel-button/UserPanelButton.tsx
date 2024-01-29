import React, { FC } from "react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const UserPanelButton: FC<Props> = ({ href, title }) => {
  return (
    <Link
      className="flex h-[4.5rem] w-[8.5rem] items-center justify-center rounded-xl border-2 border-gray "
      href={href}
    >
      <span className="w-24 text-center">{title}</span>
    </Link>
  );
};

export default UserPanelButton;
