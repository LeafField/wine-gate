import React, { FC } from "react";

const LoadingOverlay: FC = () => {
  return (
    <div className="overlay z-overlay animate-fadeIn">
      <div className="relative z-nav-menu h-8 w-8 animate-spin rounded-full border-4 border-gray border-t-transparent">
        <span className="sr-only">サーバーと通信中......</span>
      </div>
    </div>
  );
};

export default LoadingOverlay;
