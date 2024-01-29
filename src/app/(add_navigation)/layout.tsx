import React, { FC, PropsWithChildren } from "react";
import Navigation from "../../components/organisms/navigation/Navigation";

const layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-[1440px] justify-center px-6">
      <main>{children}</main>
      <Navigation />
    </div>
  );
};

export default layout;
