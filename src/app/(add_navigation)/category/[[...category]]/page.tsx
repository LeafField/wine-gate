import React from "react";
import CategoryPage from "../../../../components/template/category-page/CategoryPage";
import { categoryFetcher } from "../../../../utils/categoryFetcher";

export const revalidate = 30;

const Page = async ({ params }: { params: { category: string[] } }) => {
  const articles = await categoryFetcher(params.category);
  return <CategoryPage articles={articles} />;
};

export default Page;
