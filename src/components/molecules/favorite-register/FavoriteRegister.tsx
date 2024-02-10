import React, { FC, useState } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as regiStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  favorite: boolean;
  loading: boolean;
  addFavoriteCallback: () => void;
  removeFavoriteCallback: () => void;
};

const FavoriteRegister: FC<Props> = ({
  favorite,
  loading,
  addFavoriteCallback,
  removeFavoriteCallback,
}) => {
  if (favorite) {
    return (
      <button
        onClick={removeFavoriteCallback}
        className={`block space-x-1 border-2 border-gray px-3 py-[0.375rem] transition-colors duration-300 ${loading ? "" : "hover:border-blue"}`}
        disabled={loading}
      >
        <FontAwesomeIcon
          className={`text-yellow ${loading ? "animate-spin" : ""}`}
          icon={regiStar}
        />
        <span>お気に入り解除</span>
      </button>
    );
  } else {
    return (
      <button
        onClick={addFavoriteCallback}
        className={`block space-x-1 border-2 border-gray px-3 py-[0.375rem] transition-colors duration-300 ${loading ? "" : "hover:border-blue"}`}
        disabled={loading}
      >
        <FontAwesomeIcon
          className={`text-gray ${loading ? "animate-spin" : ""}`}
          icon={faStar}
        />
        <span>お気に入り登録</span>
      </button>
    );
  }
};

export default FavoriteRegister;
