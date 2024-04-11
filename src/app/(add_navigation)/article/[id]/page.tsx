import React from "react";
import { getWine } from "../../../../utils/fetcher";
import ArticlePage from "../../../../components/template/article-page/ArticlePage";

export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

const page = async ({ params }: { params: { id: string } }) => {
  const wine = await getWine(params.id);
  return <ArticlePage {...wine} />;
};

export default page;
