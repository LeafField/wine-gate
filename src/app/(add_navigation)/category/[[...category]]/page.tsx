import React from "react";
import CategoryPage from "../../../../components/template/category-page/CategoryPage";
import {
  categoryFetcher,
  categoryCountFetcher,
} from "../../../../utils/categoryFetcher";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const Page = async ({ params }: { params: { category: string[] } }) => {
  const articles = await categoryFetcher(params.category);
  const totalPage = await categoryCountFetcher(params.category[0]);
  return (
    <CategoryPage
      articles={articles}
      slug={params.category}
      totalPage={totalPage}
    />
  );
};

export default Page;
