import { useQuery } from "@tanstack/react-query";
import { getMyPostWine } from "../utils/fetcher";

const useQueryMyPostWine = (user_id: string | null) => {
  const getWine = async () => {
    if (user_id) {
      const data = await getMyPostWine(user_id);
      return data;
    } else {
      return null;
    }
  };
  return useQuery({
    queryKey: ["myPostWine"],
    queryFn: getWine,
  });
};

export default useQueryMyPostWine;
