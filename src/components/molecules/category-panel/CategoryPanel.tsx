import React, { FC } from "react";
import { CategoryProps } from "../../../types/article_types";
import CategoryLink from "../../atoms/category-link/CategoryLink";
import { useStore } from "../../../store";

type Props = {
  categories: CategoryProps[];
};

const CategoryPanel: FC<Props> = ({ categories }) => {
  const redItems = categories.filter((category) => category.sub === "red");
  const whiteItems = categories.filter((category) => category.sub === "white");
  const interimItems = categories.filter(
    (category) => category.sub === "interim",
  );
  const otherItems = categories.filter((category) => category.sub === "other");
  const { menu } = useStore();

  return (
    <div
      className={`nav-panel max-tablet:animate-fadeIn ${menu === "category" ? "max-tablet:flex" : "max-tablet:hidden"}`}
      id="category-panel"
    >
      <h2 className="nav-title">カテゴリー検索</h2>
      <div className="flex flex-col gap-y-4 panel-inner">
        <ul className="flex justify-between">
          {redItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex justify-end gap-6">
          {whiteItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex justify-end gap-6">
          {interimItems.map((item) => (
            <li key={item.id}>
              <CategoryLink src={item.category} title={item.chara} />
            </li>
          ))}
        </ul>
        <ul className="flex justify-end gap-6">
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

export default CategoryPanel;
