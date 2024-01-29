import React, { FC } from "react";
import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const UserPanelButton: FC<Props> = ({ href, title }) => {
  return (
    <Link
      className="user-panel-button hover:border-blue focus:outline-blue"
      href={href}
    >
      <span className="w-24 text-center">{title}</span>
    </Link>
  );
};

export default UserPanelButton;
