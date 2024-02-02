"use client";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store";
import CloseButton from "../close-button/CloseButton";

const FreeButton: FC = () => {
  const { menu, setMenu } = useStore();

  const handleClick = () => {
    setMenu("free");
  };

  if (menu === "free") {
    return <CloseButton rightBorder={true} />;
  } else {
    return (
      <button
        type="button"
        className="flex w-full flex-col items-center justify-center border-r border-white"
        onClick={handleClick}
        aria-controls="free-search-panel"
        aria-expanded={false}
      >
        <FontAwesomeIcon
          className="text-menu-icon text-white"
          icon={faMagnifyingGlass}
          aria-hidden={"true"}
        />
        <span className="text-menu-title text-white">フリーワード検索</span>
      </button>
    );
  }
};

export default FreeButton;
