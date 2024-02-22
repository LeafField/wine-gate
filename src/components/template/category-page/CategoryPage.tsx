import React, { FC } from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import CategoryHeader from "../../molecules/category-header/CategoryHeader";
import WideArticle from "../../organisms/wide-article/WideArticle";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";
import { ArticleProps } from "../../../types/article_types";

type Props = {
  articles: ArticleProps[] | null;
};

const CategoryPage: FC<Props> = ({ articles }) => {
  return (
    <>
      <LineUpHero />
      <CategoryHeader title="新着ワイン" />
      <main className="mx-4 space-y-4 main tablet:mx-0">
        {articles &&
          articles.map((content) => (
            <WideArticle key={content.id} article={content} />
          ))}
      </main>
      <div className="footer-area">
        <TopPageLink />
      </div>
    </>
  );
};

export default CategoryPage;
