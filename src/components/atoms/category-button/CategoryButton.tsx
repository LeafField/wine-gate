"use client";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../store";
import CloseButton from "../close-button/CloseButton";

const CategoryButton: FC = () => {
  const { menu, setMenu } = useStore();

  const handleClick = () => {
    setMenu("category");
  };

  if (menu === "category") {
    return <CloseButton rightBorder={false} />;
  } else {
    return (
      <button
        type="button"
        className="flex w-full flex-col items-center justify-center"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          className="text-menu-icon text-white"
          icon={faList}
          aria-hidden={"true"}
        />
        <span className="text-menu-title text-white">カテゴリー検索</span>
      </button>
    );
  }
};
// 0.75rem = 12px
export default CategoryButton;
