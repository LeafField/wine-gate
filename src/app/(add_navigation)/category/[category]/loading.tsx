import React, { FC } from "react";
import WideArticleLoading from "../../../../components/atoms/wide-article-loading/WideArticleLoading";
import CategoryHeader from "../../../../components/molecules/category-header/CategoryHeader";
import Heading from "../../../../components/atoms/heading/Heading";

const Loading: FC = () => {
  return (
    <>
      <div className="sort">
        <Heading title={"検索中"} />
      </div>
      <main className="mx-4 max-w-[64.9375rem] space-y-4 main tablet:mx-0 tablet:w-[calc(var(--vw)-401px)]">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="space-y-4" key={i}>
            <WideArticleLoading />
          </div>
        ))}
      </main>
    </>
  );
};

export default Loading;
