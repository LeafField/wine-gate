import React, { FC, PropsWithChildren } from "react";

const TopPageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="flex w-full flex-col gap-[3.75rem] px-6 tablet:w-[20.75rem] tablet:px-0 laptop:w-[43.0625rem] desktop:w-[64.9375rem]">
      {children}
    </section>
  );
};

export default TopPageContainer;
