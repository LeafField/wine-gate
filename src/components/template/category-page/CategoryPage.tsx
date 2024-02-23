import React, { FC } from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import CategoryHeader from "../../molecules/category-header/CategoryHeader";
import WideArticle from "../../organisms/wide-article/WideArticle";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";
import { ArticleProps } from "../../../types/article_types";
import WinePagination from "../../molecules/pagination/WinePagination";
import { categoryDummyData } from "../../../utils/dummyData";

type Props = {
  articles: ArticleProps[] | null;
  slug: string[];
  totalPage: number;
};

const CategoryPage: FC<Props> = ({ articles, slug, totalPage }) => {
  const category = slug[0];
  const sort = slug[1];
  const activePage = slug[2];

  const categoryTitle = categoryDummyData.find(
    (data) => data.category === category,
  )?.chara;

  return (
    <>
      <LineUpHero />
      {categoryTitle && (
        <CategoryHeader title={`カテゴリー:「${categoryTitle}」`} />
      )}
      <main className="mx-4 space-y-4 main tablet:mx-0">
        {articles &&
          articles.map((content) => (
            <WideArticle key={content.id} article={content} />
          ))}
      </main>
      <div className="footer-area">
        {sort !== "popular" && (
          <WinePagination
            totalPages={totalPage}
            categorySlug={category}
            activePage={Number(activePage)}
            sort={sort}
          />
        )}
        <TopPageLink />
      </div>
    </>
  );
};

export default CategoryPage;
