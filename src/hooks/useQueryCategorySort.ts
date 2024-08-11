import { useQuery } from "@tanstack/react-query";
import {
  categoryFetcher,
  categoryCountFetcher,
} from "../utils/categoryFetcher";

const useQueryCategorySort = (
  category: string,
  sort: string | null,
  page: number | null,
) => {
  const fetcher = async () => {
    if (page && sort && sort !== "popular") {
      const data = await categoryFetcher(category, sort, Number(page));
      const totalPageCount = await categoryCountFetcher(category);
      return { contentData: data, totalPageCount };
    } else return null;
  };

  const sortParam = sort ?? "";

  return useQuery({
    queryKey: [category, sortParam, page],
    queryFn: fetcher,
  });
};

export default useQueryCategorySort;
