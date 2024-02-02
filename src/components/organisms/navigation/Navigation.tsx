"use client";
import React from "react";
import CategoryPanel from "../../molecules/category-panel/CategoryPanel";
import SearchPanel from "../../molecules/search-panel/SearchForm";
import UserPanel from "../../molecules/user-panel/UserPanel";
import { selectDummyData } from "../../../utils/dummyData";
import { categoryDummyData } from "../../../utils/dummyData";
import NavMenu from "../../molecules/nav-menu/NavMenu";
import { useStore } from "../../../store";

const Navigation = () => {
  const { menu } = useStore();
  return (
    <nav className="nav">
      <div
        className={`${menu === "close" ? "invisible" : "show-panel"} z-nav tablet:visible tablet:static tablet:space-y-6`}
        id="navigation"
      >
        <UserPanel />
        <CategoryPanel categories={categoryDummyData} />
        <SearchPanel selectData={selectDummyData} />
      </div>
      <NavMenu />
    </nav>
  );
};

export default Navigation;
