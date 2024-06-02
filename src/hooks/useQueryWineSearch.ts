import { useQuery } from "@tanstack/react-query";
import { getSearchWine } from "../utils/fetcher";

const useQueryWineSearch = (searchText: string | null) => {
  const wineSearch = async () => {
    if (searchText) {
      const res = await getSearchWine(searchText);
      return res;
    } else {
      return null;
    }
  };
  return useQuery({
    queryKey: ["search"],
    queryFn: wineSearch,
  });
};

export default useQueryWineSearch;
