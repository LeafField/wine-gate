import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavorite, removeFavorite } from "../utils/fetcher";

const useMutateFavoriteCount = () => {
  const queryClient = useQueryClient();

  const CountAddMutation = useMutation({
    mutationFn: addFavorite,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ["favoriteUser", variables.wine_id],
      });
      queryClient.setQueryData(["favoriteUser", variables.wine_id], variables);
      queryClient.setQueryData(
        ["favoriteCount", variables.wine_id],
        (prevCount: number) => prevCount + 1,
      );

      return variables.user_id;
    },
    onError: (_, variables, context) => {
      queryClient.setQueryData(["favoriteUser", variables.wine_id], context);
    },
    onSettled: (_, __, { wine_id }) => {
      queryClient.invalidateQueries({
        queryKey: ["favoriteUser", wine_id],
        exact: true,
      });
      queryClient.invalidateQueries({
        queryKey: ["myFavoriteWine"],
        exact: true,
      });
    },
  });

  const CountRemoveMutation = useMutation({
    mutationFn: removeFavorite,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: ["favoriteUser", variables.wine_id],
      });
      queryClient.setQueryData(["favoriteUser", variables.wine_id], null);
      queryClient.setQueryData(
        ["favoriteCount", variables.wine_id],
        (prevCount: number) => prevCount - 1,
      );
    },
    onError: (_, variables, context) => {
      queryClient.setQueryData(["favoriteUser", variables.wine_id], context);
    },
    onSettled: (_, __, variables) => {
      queryClient.removeQueries({
        queryKey: ["favoriteUser", variables.wine_id],
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
