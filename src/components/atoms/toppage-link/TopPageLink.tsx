import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

const TopPageLink: FC = () => {
  return (
    <Link
      href={"/"}
      className="flex w-fit items-center justify-center gap-1 transition-colors duration-300 hover:text-blue"
    >
      <FontAwesomeIcon className="mt-[0.125rem]" icon={faArrowTurnUp} />
      トップページへ戻る
    </Link>
  );
};

export default TopPageLink;
