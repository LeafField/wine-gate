import React from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import CategoryHeader from "../../molecules/category-header/CategoryHeader";
import WideArticle from "../../organisms/wide-article/WideArticle";
import { articleDummyData } from "../../../utils/dummyData";
import dummyImage from "../../../images/dummy_wine2.jpg";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";

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
      <div className="footer-area">
        <TopPageLink />
      </div>
    </>
  );
};

export default CategoryPage;
