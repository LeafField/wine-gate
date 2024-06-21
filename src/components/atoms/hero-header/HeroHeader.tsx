import React, { FC } from "react";

type Props = {
  title: string;
};

const HeroHeader: FC<Props> = ({ title }) => {
  return (
    // <div className="absolute inset-0 z-front flex h-full w-full items-center justify-end bg-gradient-to-r from-transparent from-20% to-black/75 to-90% pr-6 ">
    <div className="absolute inset-0 z-front flex h-full w-full items-center justify-end pr-6 hero-mobile-verlay tablet:hero-overlay">
      <h2 className="text-heading2 font-bold text-white">{title}</h2>
    </div>
  );
};

export default HeroHeader;
