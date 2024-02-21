import React from "react";
import { smallArticleDummyData } from "../../utils/dummyData";
import TopPage from "../../components/template/top-page/TopPage";
import { getNewWines } from "../../utils/fetcher";

export const revalidate = 60;

const Home = async () => {
  const articles = await getNewWines();
  return <TopPage articles={articles} />;
};

export default Home;
