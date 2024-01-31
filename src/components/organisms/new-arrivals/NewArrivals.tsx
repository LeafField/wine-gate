import React, { FC } from "react";
import { SmallArticleProps } from "../../../types/article_types";
import SmallArticle from "../../molecules/small-article/SmallArticle";
import Heading from "../../atoms/heading/Heading";

type Props = {
  articles: SmallArticleProps[];
};

const NewArrivals: FC<Props> = ({ articles }) => {
  return (
    <section className="flex w-full flex-col gap-[3.75rem] px-6 tablet:w-[20.75rem] tablet:px-0 laptop:w-[43.0625rem] desktop:w-[64.9375rem]">
      <div className="col-span-3">
        <Heading title="新着ワイン" />
      </div>
      <div className="grid grid-cols-1 justify-items-stretch gap-5 laptop:grid-cols-2 desktop:grid-cols-3">
        {articles.map((article) => (
          <SmallArticle key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
