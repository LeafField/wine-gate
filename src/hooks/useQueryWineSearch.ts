import { useQuery } from "@tanstack/react-query";
import { getSearchWine } from "../utils/fetcher";

const useQueryWineSearch = (searchText: string) => {
  const wineSearch = async () => {
    const res = await getSearchWine(searchText);
    return res;
  };
  return useQuery({
    queryKey: ["search"],
    queryFn: wineSearch,
  });
};

export default useQueryWineSearch;
