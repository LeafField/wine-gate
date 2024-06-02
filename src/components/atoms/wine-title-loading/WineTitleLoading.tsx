import React from "react";

const WineTitleLoading = () => {
  return (
    <div className="h-[4.375rem] max-w-[64.9375rem] animate-pulse bg-gray tablet:w-[calc(var(--vw)-401px)]">
      <span className="sr-only">読み込み中...</span>
    </div>
  );
};

export default WineTitleLoading;
