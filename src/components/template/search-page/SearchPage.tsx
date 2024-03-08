"use client";
import React, { FC } from "react";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import WideArticle from "../../organisms/wide-article/WideArticle";
import TopPageLink from "../../atoms/toppage-link/TopPageLink";
import { useSearchParams } from "next/navigation";
import useQueryWineSearch from "../../../hooks/useQueryWineSearch";
import Heading from "../../atoms/heading/Heading";

const SearchPage: FC = () => {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("search");
  const { data } = useQueryWineSearch(searchText!);

  return (
    <>
      <LineUpHero title="フリーワード検索" />
      <div className="sort">
        <Heading title={`検索結果:「${searchText}」`} />
      </div>
      <main className="mx-4 max-w-[64.9375rem] space-y-4 main tablet:mx-0 tablet:w-[calc(var(--vw)-401px)]">
        {data &&
          data.map((content) => (
            <WideArticle key={content.id} article={content} />
          ))}
      </main>
      <div className="footer-area">
        <TopPageLink />
      </div>
    </>
  );
};

export default SearchPage;
