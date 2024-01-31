import React, { FC } from "react";
import CategoryButton from "../../atoms/category-button/CategoryButton";
import FreeButton from "../../atoms/free-button/FreeButton";
import MenberButton from "../../atoms/menber-button/MenberButton";

const NavMenu: FC = () => {
  return (
    <div className="flex bg-black/80 py-1">
      <MenberButton />
      <FreeButton />
      <CategoryButton />
    </div>
  );
};

export default NavMenu;
