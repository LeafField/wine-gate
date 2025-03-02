import React, { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type Props = {
  link: string;
};

const MoreLink: FC<Props> = ({ link }) => {
  return (
    <Link
      href={`/category/${link}`}
      className="mt-2 flex items-center justify-end text-black transition-colors duration-300 hover:text-blue"
      prefetch={false}
    >
      <span className="text-main-text">もっと見る</span>
      <FontAwesomeIcon
        className="h-[w-[clamp(0.875rem,1.54vw,1rem)] ml-[0.125rem] w-[clamp(0.875rem,1.54vw,1rem)]"
        icon={faArrowRightLong}
      />
    </Link>
  );
};

export default MoreLink;
