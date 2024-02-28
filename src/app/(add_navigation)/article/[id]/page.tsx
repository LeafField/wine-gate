import React from "react";
import { getWine } from "../../../../utils/fetcher";
import ArticlePage from "../../../../components/template/article-page/ArticlePage";

export const runtime = "edge";

const page = async ({ params }: { params: { id: string } }) => {
  const wine = await getWine(params.id);
  return <ArticlePage {...wine} />;
};

export default page;
