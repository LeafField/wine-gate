import { useQuery } from "@tanstack/react-query";
import { favoriteCount } from "../utils/fetcher";

const useQueryFavoriteCount = (wine_id: string) => {
  const getFavoriteCount = async () => {
    const count = await favoriteCount(wine_id);
    return count;
  };

  return useQuery({
    queryKey: ["favoriteCount", wine_id],
    queryFn: getFavoriteCount,
  });
};

export default useQueryFavoriteCount;
