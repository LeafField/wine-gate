import React from "react";
import CategoryPage from "../../../../components/template/category-page/CategoryPage";

const Page = ({ params }: { params: { category: string[] } }) => {
  return <CategoryPage />;
};

export default Page;
