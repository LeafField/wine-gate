import React from "react";
import { fetcher } from "../../utils/fetcher";
import NewArrivals from "../../components/organisms/new-arrivals/NewArrivals";
import { smallArticleDummyData } from "../../utils/dummyData";
import AuthTest from "../../components/test-components/AuthTest";

export default async function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] justify-center gap-5 px-6 pt-24">
      <AuthTest />
      <NewArrivals articles={smallArticleDummyData} />
      {/* <div className="h-72 w-[333px]  flex-shrink-0 bg-black"></div> */}
    </div>
  );
}
