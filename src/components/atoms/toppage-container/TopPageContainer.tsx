import React, { FC, PropsWithChildren } from "react";

type Props = {
  padding?: boolean;
};

const TopPageContainer: FC<PropsWithChildren<Props>> = ({
  children,
  padding = true,
}) => {
  return (
    <section
      className={`tablet:pt-30 flex w-full flex-col gap-7 pt-16 first-of-type:pt-0 tablet:w-[20.75rem] tablet:px-0 laptop:w-[43.0625rem] desktop:w-[64.9375rem] ${padding ? "px-6" : ""}`}
      data-testid="top-page-container"
    >
      {children}
    </section>
  );
};

export default TopPageContainer;
