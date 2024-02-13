"use client";
import React, { FC } from "react";

import FavoriteRegister from "../../atoms/favorite-register/FavoriteRegister";
import FavoriteCount from "../../atoms/favorite-count/FavoriteCount";
import EditingLink from "../../atoms/editing-link/EditingLink";

import useQueryFavoriteCount from "../../../hooks/useQueryFavoriteCount";
import useQueryFavoriteUser from "../../../hooks/useQueryFavoriteUser";
import { useStore } from "../../../store";

type Props = {
  wine_id: string;
  author_id: string;
};

const ArticleConsole: FC<Props> = ({ wine_id, author_id }) => {
  const { data: count } = useQueryFavoriteCount(wine_id);
  const { data } = useQueryFavoriteUser(wine_id);
  const { user } = useStore();

  return (
    <div className="flex items-center justify-between gap-x-4 tablet:w-fit ">
      {count && <FavoriteCount count={count} />}
      {user && user?.id !== author_id && (
        <FavoriteRegister
          loading={false}
          favorite={user?.id === data?.user_id}
          addFavoriteCallback={() => {}}
          removeFavoriteCallback={() => {}}
        />
      )}
      {user && user.id === author_id && <EditingLink wine_id={wine_id} />}
    </div>
  );
};

export default ArticleConsole;
