import React, { PropsWithChildren, FC } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" mx-auto grid  justify-center gap-x-5 px-6 grid-areas empty-hero tablet:px-0">
      {children}
    </div>
  );
};

export default Container;
