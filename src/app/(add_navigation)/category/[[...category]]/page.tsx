import React from "react";
import CategoryHeader from "../../../../components/molecules/category-header/CategoryHeader";
import LineUpHero from "../../../../components/molecules/lineup-hero/LineUpHero";

const CategoryPage = () => {
  return (
    <>
      <LineUpHero />
      <CategoryHeader title="新着ワイン" />
      <main className="main"></main>
    </>
  );
};

export default CategoryPage;
