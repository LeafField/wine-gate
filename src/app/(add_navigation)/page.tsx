import React from "react";
import { smallArticleDummyData } from "../../utils/dummyData";
import TopPage from "../../components/template/top-page/TopPage";

export default async function Home() {
  return <TopPage articles={smallArticleDummyData} />;
}
