import React, { FC } from "react";
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
  const clickHandler = () => {
    if (favorite) {
      removeFavoriteCallback();
    } else {
      addFavoriteCallback();
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={`block cursor-pointer space-x-1 border-2 border-gray px-3 py-[0.375rem] transition-colors duration-300 ${loading ? "" : "hover:border-blue"}`}
      disabled={loading}
    >
      <FontAwesomeIcon
        className={`text-yellow`}
        icon={favorite ? regiStar : faStar}
      />
      <span>お気に入り{favorite ? "解除" : "登録"}</span>
    </button>
  );
};

export default FavoriteRegister;
