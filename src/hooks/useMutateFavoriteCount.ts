import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { favoriteCount, removeFavorite } from "../utils/fetcher";

const useMutateFavoriteCount = () => {
  const queryClient = useQueryClient();

  const CountAddMutation = useMutation({
    mutationFn: favoriteCount,
    onSuccess: (_, variable) => {
      queryClient.setQueryData(
        ["favoriteCount", variable],
        (prevCount: number) => prevCount + 1,
      );
    },
  });

  const CountRemoveMutation = useMutation({
    mutationFn: removeFavorite,
    onSuccess: (_, variable) => {
      queryClient.setQueryData(
        ["favoriteCount", variable],
        (prevCount: number) => prevCount - 1,
      );
    },
  });

  return { CountAddMutation, CountRemoveMutation };
};

export default useMutateFavoriteCount;
