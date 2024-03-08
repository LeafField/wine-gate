import React, { FC, PropsWithChildren } from "react";
import LineUpHero from "../../../../components/molecules/lineup-hero/LineUpHero";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <LineUpHero title="カテゴリー検索" />
      {children}
    </>
  );
};

export default Layout;
