"use client";
import React, { FC, useState } from "react";
import CategoryHeader from "../../molecules/category-header/CategoryHeader";
import WideArticle from "../../organisms/wide-article/WideArticle";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";
import { ArticleProps } from "../../../types/article_types";
import WinePagination from "../../molecules/pagination/WinePagination";
import { categoryDummyData } from "../../../utils/dummyData";
import { useSearchParams } from "next/navigation";
import useQueryCategorySort from "../../../hooks/useQueryCategorySort";
import WideArticleLoading from "../../atoms/wide-article-loading/WideArticleLoading";

type Props = {
  articles: ArticleProps[];
  slug: string;
};

const CategoryPage: FC<Props> = ({ articles, slug }) => {
  const defaultSort = "popular";
  const [sort, setSort] = useState(defaultSort);
  const [page, setPage] = useState(1);
  const categoryTitle = categoryDummyData.find(
    (data) => data.category === slug,
  )?.chara;
  const { data, isLoading } = useQueryCategorySort(slug, sort, page);
  return (
    <>
      {categoryTitle && (
        <CategoryHeader
          sort={sort}
          setSort={setSort}
          title={`カテゴリー:「${categoryTitle}」`}
        />
      )}
      <main className="mx-4 space-y-4 main tablet:mx-0">
        {sort === defaultSort &&
          articles.map((content) => (
            <WideArticle key={content.id} article={content} />
          ))}
        {data?.contentData && sort !== defaultSort
          ? data.contentData.map((content) => (
              <WideArticle key={content.id} article={content} />
            ))
          : isLoading &&
            sort !== defaultSort &&
            Array.from({ length: 10 }).map((_, i) => (
              <div className="space-y-4" key={i}>
                <WideArticleLoading />
              </div>
            ))}
      </main>
      <div className="footer-area">
        {sort && sort !== defaultSort && data?.totalPageCount && (
          <WinePagination
            totalPages={data.totalPageCount}
            activePage={page}
            setPage={setPage}
          />
        )}
        <TopPageLink />
      </div>
    </>
  );
};

export default CategoryPage;
