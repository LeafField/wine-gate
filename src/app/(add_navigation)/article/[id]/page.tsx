import React from "react";
import { getWine } from "../../../../utils/fetcher";
import ArticlePage from "../../../../components/template/article-page/ArticlePage";

// export const runtime = "edge";
export const dynamicParams = true;

export const generateStaticParams = async () => {
  return [{ slug: "4be1f2ab-b3b3-4599-b1a1-a73d280f5033" }];
};

const page = async ({ params }: { params: { id: string } }) => {
  const wine = await getWine(params.id);

  return <ArticlePage {...wine} />;
};

export default page;
