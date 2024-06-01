import React from "react";
import CategoryHeader from "../../../../components/molecules/category-header/CategoryHeader";
import WideArticleLoading from "../../../../components/atoms/wide-article-loading/WideArticleLoading";

const Loading = () => {
  return (
    <>
      <CategoryHeader title="通信中..." />
      <div className="mx-4 max-w-[64.9375rem] space-y-4 main tablet:mx-0 tablet:w-[calc(var(--vw)-401px)]">
        {Array.from({ length: 10 }).map((_, i) => (
          <WideArticleLoading key={i} />
        ))}
      </div>
    </>
  );
};

export default Loading;
