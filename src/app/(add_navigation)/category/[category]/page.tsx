import React, { Suspense } from "react";
import CategoryPage from "../../../../components/template/category-page/CategoryPage";
import { popularCategoryFetcher } from "../../../../utils/categoryFetcher";
import { getWineCategorySlug } from "../../../../utils/fetcher";
import { unstable_cache } from "next/cache";

export const generateStaticParams = async () => {
  const slug = await getWineCategorySlug();
  return slug.map(({ category }) => {
    return { category: category };
  });
};

const Page = async ({ params }: { params: { category: string } }) => {
  const fetcher = unstable_cache(
    async () => popularCategoryFetcher(params.category),
    [`category-${params.category}`],
    { revalidate: 86400 },
  );
  const articles = await fetcher();
  return <CategoryPage articles={articles} slug={params.category} />;
};

export default Page;
