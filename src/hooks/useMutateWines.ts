import { postWine, updateWine } from "../utils/fetcher";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useMutateWines = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const winePostMutation = useMutation({
    mutationFn: postWine,
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ["myFavoriteWine"] });
      router.replace(`/article/${id}`);
    },
    onError: (err: any) => {
      alert((err as Error).message);
    },
  });

  const wineUpdateMutation = useMutation({
    mutationFn: updateWine,
    onSuccess: (id) => {
      router.replace(`/article/${id}`);
    },
  });

  return { winePostMutation, wineUpdateMutation };
};

export default useMutateWines;
