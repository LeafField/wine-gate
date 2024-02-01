import React, { FC, PropsWithChildren } from "react";

const GridContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-5 laptop:grid-cols-2 desktop:grid-cols-3">
      {children}
    </div>
  );
};

export default GridContainer;
