import { useRouter } from "next/navigation";
import { postWine } from "../utils/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useMutateWines = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const winePostMutation = useMutation({
    mutationFn: postWine,
    onSuccess: (id) => {
      queryClient.invalidateQueries({ queryKey: ["wines"] });
      router.push(`/article/${id}`);
    },
    onError: (err: any) => {
      alert((err as Error).message);
    },
  });
  return { winePostMutation };
};

export default useMutateWines;
