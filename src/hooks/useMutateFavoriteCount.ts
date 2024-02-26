import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavorite, removeFavorite } from "../utils/fetcher";

const useMutateFavoriteCount = () => {
  const queryClient = useQueryClient();

  const CountAddMutation = useMutation({
    mutationFn: addFavorite,
    onSuccess: (_, variable) => {
      queryClient.setQueryData(
        ["favoriteCount", variable.wine_id],
        (prevCount: number) => prevCount + 1,
      );
      queryClient.setQueryData(["favoriteUser", variable.wine_id], {
        user_id: variable.user_id,
      });
      queryClient.invalidateQueries({
        queryKey: ["myFavoriteWine"],
        exact: true,
      });
    },
  });

  const CountRemoveMutation = useMutation({
    mutationFn: removeFavorite,
    onSuccess: (_, variable) => {
      queryClient.setQueryData(
        ["favoriteCount", variable.wine_id],
        (prevCount: number) => prevCount - 1,
      );
      queryClient.removeQueries({
        queryKey: ["favoriteUser", variable.wine_id],
      });
      queryClient.invalidateQueries({
        queryKey: ["myFavoriteWine"],
        exact: true,
      });
    },
  });

  return { CountAddMutation, CountRemoveMutation };
};

export default useMutateFavoriteCount;
