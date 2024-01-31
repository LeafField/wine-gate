import React, { FC } from "react";
import CategoryButton from "../../atoms/category-button/CategoryButton";
import FreeButton from "../../atoms/free-button/FreeButton";
import MenberButton from "../../atoms/menber-button/MenberButton";

const NavMenu: FC = () => {
  return (
    <div className="z-nav-menu fixed bottom-0 left-0 right-0 flex w-full bg-black/80 py-1 backdrop-blur-sm tablet:hidden">
      <MenberButton />
      <FreeButton />
      <CategoryButton />
    </div>
  );
};

export default NavMenu;
