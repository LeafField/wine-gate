import React from "react";
import CategoryHeader from "../../../../components/molecules/category-header/CategoryHeader";
import LineUpHero from "../../../../components/molecules/lineup-hero/LineUpHero";
import WideArticle from "../../../../components/organisms/wide-article/WideArticle";
import { articleDummyData } from "../../../../utils/dummyData";
import dummyImage from "../../../../images/dummy_wine.png";

const CategoryPage = () => {
  return (
    <>
      <LineUpHero />
      <CategoryHeader title="新着ワイン" />
      <main className="mx-4 space-y-4 main tablet:mx-0">
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
        <WideArticle article={articleDummyData} image_src={dummyImage.src} />
      </main>
    </>
  );
};

export default CategoryPage;
