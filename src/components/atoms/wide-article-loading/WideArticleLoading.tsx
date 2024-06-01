import React, { FC } from "react";

const WideArticleLoading: FC = () => {
  return (
    <div className="@container">
      <div className="flex animate-pulse flex-col border border-gray transition-colors duration-300 @[767px]:flex-row">
        <div className="aspect-video w-full shrink-0 overflow-hidden bg-gray @[767px]:aspect-auto @[767px]:h-auto @[767px]:w-[20.8125rem]"></div>
        <div className="flex-1 space-y-4 p-2 @[767px]:px-3 @[767px]:py-5">
          <div className="h-9 w-full rounded-md bg-gray">
            <span className="sr-only">読み込み中</span>
          </div>
          <div className="h-[1.875rem] w-full rounded-md bg-gray"></div>
          <div className="h-[clamp(1.125rem,2.31vw,1.5rem)] w-full rounded-md bg-gray"></div>
          <div className="h-[clamp(1.125rem,2.31vw,1.5rem)] w-full rounded-md bg-gray"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WideArticleLoading;
