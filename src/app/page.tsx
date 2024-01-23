import React from "react";
import { fetcher } from "../utils/fetcher";
import NewArrivals from "../components/organisms/new-arrivals/NewArrivals";
import { smallArticleDummyData } from "../utils/dummyData";

// export const runtime = "edge";

export default async function Home() {
  // const data = await fetcher();

  return (
    // <div className="mx-auto flex max-w-[1000px] flex-col justify-center bg-background p-8 ">
    //   <h1 className="text-yellow">Hello World</h1>
    //   <div>
    //     {data.map((category) => (
    //       <div key={category.id}>
    //         <p>{category.category}</p>
    //         <p>{category.id}</p>
    //         <p>{category.sub}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="mx-auto flex max-w-[1440px] justify-center gap-5 px-6 pt-24">
      <NewArrivals articles={smallArticleDummyData} />
      {/* <div className="h-72 w-[333px]  flex-shrink-0 bg-black"></div> */}
    </div>
  );
}
