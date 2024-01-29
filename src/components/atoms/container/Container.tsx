import React, { PropsWithChildren, FC } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid-areas empty-hero mx-auto grid max-w-[1440px] grid-cols-[1039px_333px] justify-center gap-x-5 px-6 tablet:px-0">
      {children}
    </div>
  );
};

export default Container;
