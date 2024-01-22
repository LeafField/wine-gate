import React, { FC } from "react";
import { SmallArticleProps } from "../../../types/article_types";
import SmallArticle from "../../molecules/small-article/SmallArticle";

type Props = {
  articles: SmallArticleProps[];
};

const NewArrivals: FC<Props> = ({ articles }) => {
  return (
    <section>
      <div>
        {articles.map((article) => (
          <SmallArticle key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
