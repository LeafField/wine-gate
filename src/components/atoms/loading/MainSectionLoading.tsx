import React from "react";

const MainSectionLoading = () => {
  return (
    <div className="flex max-w-[64.9375rem] items-center justify-center main tablet:w-[calc(var(--vw)-401px)]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray border-t-transparent">
        <span className="sr-only">サーバーと通信中......</span>
      </div>
    </div>
  );
};

export default MainSectionLoading;
