import React, { FC } from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import WineTitle from "../../atoms/wine-title/WineTitle";
import { WineTitleProps } from "../../../types/article_types";
import BackLink from "../../atoms/back-link/BackLink";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";

type Props = {
  heroTitle: string;
  pageTitle: string;
  articles: WineTitleProps[];
};

const MyPage: FC<Props> = ({ heroTitle, pageTitle, articles }) => {
  return (
    <>
      <LineUpHero title={heroTitle} />
      <h3 className="mx-4 border-b-2 border-red text-heading2 sort tablet:mx-0">
        {pageTitle}
      </h3>
      <main className="max-w-[64.9375rem] space-y-4 px-4 main tablet:w-[calc(var(--vw)-401px)] tablet:px-0">
        {articles.map((article) => (
          <WineTitle key={article.id} id={article.id} title={article.title} />
        ))}
      </main>
      <div className="footer-area">
        <BackLink />
        <TopPageLink />
      </div>
    </>
  );
};

export default MyPage;
