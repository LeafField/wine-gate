import React from "react";
import MainSectionLoading from "../../../../components/atoms/loading/MainSectionLoading";
import CategoryHeader from "../../../../components/molecules/category-header/CategoryHeader";

const Loading = () => {
  return (
    <>
      <CategoryHeader title="通信中..." />
      <MainSectionLoading />
    </>
  );
};

export default Loading;
