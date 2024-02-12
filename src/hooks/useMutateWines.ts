import { postWine } from "../utils/fetcher";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useMutateWines = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const winePostMutation = useMutation({
    mutationFn: postWine,
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ["wines"] });
      router.replace(`/article/${id}`);
    },
    onError: (err: any) => {
      alert((err as Error).message);
    },
  });
  return { winePostMutation };
};

export default useMutateWines;
