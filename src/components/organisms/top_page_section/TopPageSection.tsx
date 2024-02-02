import React, { FC } from "react";
import AboutLink from "../../atoms/about-link/AboutLink";
import SelectLink from "../../atoms/wine-select-link/SelectLink";
import TopPageContainer from "../../atoms/toppage-container/TopPageContainer";

const TopPageSection: FC = () => {
  return (
    <TopPageContainer padding={false}>
      <div className="grid grid-rows-[2fr,1fr] gap-5 tablet:grid-cols-2 desktop:grid-cols-3 desktop:grid-rows-2">
        <SelectLink />
        <AboutLink />
      </div>
    </TopPageContainer>
  );
};

export default TopPageSection;
