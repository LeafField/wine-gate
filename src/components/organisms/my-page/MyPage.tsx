import React, { FC } from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import WineTitle from "../../atoms/wine-title/WineTitle";
import { WineTitleProps } from "../../../types/article_types";
import BackLink from "../../atoms/back-link/BackLink";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";

type Props = {
  articles: WineTitleProps[];
};

const MyPage: FC<Props> = ({ articles }) => {
  return (
    <>
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
