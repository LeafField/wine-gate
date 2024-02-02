import React, { FC } from "react";
import { SmallArticleProps } from "../../../types/article_types";
import TopPageSection from "../../organisms/top_page_section/TopPageSection";
import NewArrivals from "../../organisms/new-arrivals/NewArrivals";

type Props = {
  articles: SmallArticleProps[];
};

const TopPage: FC<Props> = ({ articles }) => {
  return (
    <main className="main">
      <TopPageSection />
      <NewArrivals articles={articles} />
    </main>
  );
};

export default TopPage;
