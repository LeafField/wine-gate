"use client";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store";

type Props = {
  rightBorder?: boolean;
};

const CloseButton: FC<Props> = ({ rightBorder = true }) => {
  const { setMenu } = useStore();
  const clickhandler = () => {
    setMenu("close");
  };
  return (
    <button
      type="button"
      className={`flex w-full flex-col items-center justify-center border-white ${rightBorder ? "border-r" : ""}`}
      onClick={clickhandler}
      aria-controls="navigation"
      aria-expanded={true}
    >
      <FontAwesomeIcon
        className="text-menu-icon text-white"
        icon={faXmark}
        aria-hidden={"true"}
      />
      <span className="text-menu-title text-white">閉じる</span>
    </button>
  );
};

export default CloseButton;
