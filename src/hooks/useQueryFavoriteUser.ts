import { useQuery } from "@tanstack/react-query";
import { favoriteUserOne } from "../utils/fetcher";
import { supabase } from "../utils/supabase";

const useQueryFavoriteUser = (wine_id: string) => {
  const getFavoriteUser = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      const user = await favoriteUserOne(wine_id, data.session.user.id);
      return user;
    } else {
      return null;
    }
  };

  return useQuery({
    queryKey: ["favoriteUser", wine_id],
    queryFn: getFavoriteUser,
  });
};

export default useQueryFavoriteUser;
