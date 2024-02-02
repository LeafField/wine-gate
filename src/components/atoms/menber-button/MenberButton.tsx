"use client";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useStore } from "../../../store";
import CloseButton from "../close-button/CloseButton";

const MenberButton: FC = () => {
  const { menu, setMenu } = useStore();

  const handleClick = () => {
    setMenu("member");
  };

  if (menu === "member") {
    return <CloseButton rightBorder={true} />;
  } else {
    return (
      <button
        type="button"
        className="flex w-full flex-col items-center justify-center border-r border-white"
        onClick={handleClick}
        aria-controls="user-panel"
        aria-expanded={false}
      >
        <FontAwesomeIcon
          className="text-menu-icon text-white"
          icon={faUser}
          aria-hidden={"true"}
        />
        <span className="text-menu-title text-white">会員メニュー</span>
      </button>
    );
  }
};

export default MenberButton;
