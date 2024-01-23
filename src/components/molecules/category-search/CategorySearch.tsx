import React, { FC } from "react";
import { CategoryProps } from "../../../types/article_types";
import CategoryLink from "../../atoms/category-link/CategoryLink";

type Props = {
  categories: CategoryProps[];
};

const CategorySearch: FC<Props> = ({ categories }) => {
  const redItems = categories.filter((category) => category.sub === "red");
  const whiteItems = categories.filter((category) => category.sub === "white");
  const interimItems = categories.filter(
    (category) => category.sub === "interim",
  );
  const otherItems = categories.filter((category) => category.sub === "other");

  return (
    <div className="nav-panel">
      <h2 className="nav-title">カテゴリー検索</h2>
      <div className="flex flex-col gap-y-6">
        <ul className="flex w-[18.3125rem] justify-between">
          {redItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex w-[18.3125rem] justify-end gap-6">
          {whiteItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex w-[18.3125rem] justify-end gap-6">
          {interimItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex w-[18.3125rem] justify-end gap-6">
          {otherItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySearch;
