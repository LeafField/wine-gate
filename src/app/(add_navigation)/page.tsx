import React from "react";
import { fetcher } from "../../utils/fetcher";
import NewArrivals from "../../components/organisms/new-arrivals/NewArrivals";
import { smallArticleDummyData } from "../../utils/dummyData";

export default async function Home() {
  return (
    <>
      <main className="main">
        <NewArrivals articles={smallArticleDummyData} />
      </main>
    </>
  );
}
