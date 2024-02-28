import React from "react";
import TopPage from "../../components/template/top-page/TopPage";
import { getNewWines } from "../../utils/fetcher";

export const revalidate = 3600;
export const runtime = "edge";

const Home = async () => {
  const articles = await getNewWines();
  return <TopPage articles={articles} />;
};

export default Home;
