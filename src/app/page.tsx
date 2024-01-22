import React from "react";
import { fetcher } from "../utils/fetcher";

export const runtime = "edge";

export default async function Home() {
  const data = await fetcher();

  return (
    <div className="mx-auto flex max-w-[1000px] flex-col justify-center bg-background p-8 ">
      <h1 className="text-yellow">Hello World</h1>
      <div>
        {data.map((category) => (
          <div key={category.id}>
            <p>{category.category}</p>
            <p>{category.id}</p>
            <p>{category.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
