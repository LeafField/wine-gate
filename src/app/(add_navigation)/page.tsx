import React from "react";
import TopPage from "../../components/template/top-page/TopPage";
import { getNewWines } from "../../utils/fetcher";

export const dynamic = "force-static";
export const revalidate = 3600;

const Home = async () => {
  const articles = await getNewWines();
  return <TopPage articles={articles} />;
};

export default Home;
