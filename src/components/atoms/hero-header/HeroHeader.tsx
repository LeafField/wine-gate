import React, { FC } from "react";

type Props = {
  title: string;
};

const HeroHeader: FC<Props> = ({ title }) => {
  return (
    <div className="absolute inset-0 z-front flex h-full w-full items-center justify-end hero-mobile-overlay tablet:hero-overlay">
      <div className="mx-auto flex w-full max-w-[87rem] items-center justify-end px-6">
        <h2 className="text-heading2 font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default HeroHeader;
