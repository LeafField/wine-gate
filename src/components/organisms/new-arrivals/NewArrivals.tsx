import React, { FC } from "react";
import { SmallArticleProps } from "../../../types/article_types";
import SmallArticle from "../../molecules/small-article/SmallArticle";
import Heading from "../../atoms/heading/Heading";
import TopPageContainer from "../../atoms/toppage-container/TopPageContainer";

type Props = {
  articles: SmallArticleProps[];
};

const NewArrivals: FC<Props> = ({ articles }) => {
  return (
    <TopPageContainer>
      <div className="col-span-3">
        <Heading title="新着ワイン" />
      </div>
      <div className="grid grid-cols-1 justify-items-stretch gap-5 laptop:grid-cols-2 desktop:grid-cols-3">
        {articles.map((article) => (
          <SmallArticle key={article.id} {...article} />
        ))}
      </div>
    </TopPageContainer>
  );
};

export default NewArrivals;
