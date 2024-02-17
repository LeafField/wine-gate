import { useQuery } from "@tanstack/react-query";
import { getWine } from "../utils/fetcher";

const useQueryWineOne = (wine_id: string | null) => {
  const getWineOne = async () => {
    if (wine_id) {
      const res = await getWine(wine_id);
      return res;
    } else {
      return null;
    }
  };
  return useQuery({
    queryFn: getWineOne,
    queryKey: ["editedWine"],
  });
};

export default useQueryWineOne;
