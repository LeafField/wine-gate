import React from "react";
import SelectPage from "../../../components/template/select-page/SelectPage";
import { categoryFavoriteSmallArticleFetcher } from "../../../utils/categoryFetcher";

export const revalidate = 3600;

const page = async () => {
  const sober = await categoryFavoriteSmallArticleFetcher("sober");
  const fruity = await categoryFavoriteSmallArticleFetcher("fruity");
  const tart = await categoryFavoriteSmallArticleFetcher("tart");
  const white = await categoryFavoriteSmallArticleFetcher("white");
  const sweet = await categoryFavoriteSmallArticleFetcher("sweet");
  return (
    <SelectPage
      fruity={fruity}
      sober={sober}
      sweet={sweet}
      tart={tart}
      white={white}
    />
  );
};

export default page;
