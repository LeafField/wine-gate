import React from "react";
import CategoryPanel from "../../molecules/category-panel/CategoryPanel";
import SearchPanel from "../../molecules/search-panel/SearchForm";
import UserPanel from "../../molecules/user-panel/UserPanel";
import { selectDummyData } from "../../../utils/dummyData";
import { categoryDummyData } from "../../../utils/dummyData";

const Navigation = () => {
  return (
    <nav className="hidden space-y-6 nav tablet:block">
      <UserPanel />
      <CategoryPanel categories={categoryDummyData} />
      <SearchPanel selectData={selectDummyData} />
    </nav>
  );
};

export default Navigation;
