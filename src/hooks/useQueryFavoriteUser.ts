import { useQuery } from "@tanstack/react-query";
import { favoriteUserOne } from "../utils/fetcher";

import React from "react";

const useQueryFavoriteUser = (wine_id: string) => {
  const getFavoriteUser = async () => {
    const user = await favoriteUserOne(wine_id);
    return user;
  };

  return useQuery({
    queryKey: ["favoriteUser", wine_id],
    queryFn: getFavoriteUser,
  });
};

export default useQueryFavoriteUser;
