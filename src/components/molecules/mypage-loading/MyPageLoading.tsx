import React, { FC } from "react";
import WineTitleLoading from "../../atoms/wine-title-loading/WineTitleLoading";

const MyPageLoading: FC = () => {
  return (
    <main className="max-w-[64.9375rem] space-y-4 px-4 main tablet:w-[calc(var(--vw)-401px)] tablet:px-0">
      {Array.from({ length: 10 }).map((_, i) => (
        <WineTitleLoading key={i} />
      ))}
    </main>
  );
};

export default MyPageLoading;
