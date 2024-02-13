import React, { FC } from "react";
import ArticleConsole from "../../molecules/article-console/ArticleConsole";
import ArticleTags from "../../molecules/article-tags/ArticleTags";
import { CategoryProps } from "../../../types/article_types";

type Props = {
  tags: string;
  category: CategoryProps;
  wine_id: string;
  author_id: string;
};

const ArticlePanel: FC<Props> = ({ author_id, category, tags, wine_id }) => {
  return (
    <div className="flex items-center justify-between border border-gray px-5 py-2">
      <div>
        <ArticleTags tags={tags} category={category} />
      </div>
      <div>
        <ArticleConsole wine_id={wine_id} author_id={author_id} />
      </div>
    </div>
  );
};

export default ArticlePanel;
