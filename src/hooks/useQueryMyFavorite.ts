import { useQuery } from "@tanstack/react-query";
import { getFavoriteWine } from "../utils/fetcher";

const useQueryMyFavorite = (user_id: string | null) => {
  const getWine = async () => {
    if (user_id) {
      const data = await getFavoriteWine(user_id);
      return data;
    } else {
      return null;
    }
  };
  return useQuery({
    queryKey: ["myFavoriteWine"],
    queryFn: getWine,
  });
};

export default useQueryMyFavorite;
