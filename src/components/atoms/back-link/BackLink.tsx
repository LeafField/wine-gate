import React, { FC, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const BackLink: FC = () => {
  const router = useRouter();

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.back();
  };

  return (
    <button
      className="flex items-center justify-center gap-1 transition-colors duration-300 hover:text-blue"
      type="button"
      onClick={clickHandler}
    >
      <FontAwesomeIcon className="mt-[2px]" icon={faReply} />
      前のページに戻る
    </button>
  );
};

export default BackLink;
