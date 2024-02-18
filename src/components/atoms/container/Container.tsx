import React, { PropsWithChildren, FC } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto grid justify-center grid-areaMobile max-tablet:grid-cols-1 tablet:gap-x-5 tablet:grid-areas">
      {children}
    </div>
  );
};

export default Container;
