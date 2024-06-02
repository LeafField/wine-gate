"use client";
import React, { FC, useEffect } from "react";
import MyPage from "../../organisms/my-page/MyPage";
import { useStore } from "../../../store";
import useQueryMyFavorite from "../../../hooks/useQueryMyFavorite";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import { useQueryClient } from "@tanstack/react-query";
import WineTitleLoading from "../../atoms/wine-title-loading/WineTitleLoading";
import MyPageLoading from "../../molecules/mypage-loading/MyPageLoading";

const FavoritePage: FC = () => {
  const { user } = useStore();
  const { data, isLoading } = useQueryMyFavorite(user ? user.id : null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!data && !user) {
      queryClient.removeQueries({ queryKey: ["myFavoriteWine"] });
    }
  }, [queryClient, data, user]);

  return (
    <>
      <LineUpHero title="マイページ" />
      <h3 className="mx-4 border-b-2 border-red text-heading2 sort tablet:mx-0 tablet:w-[calc(var(--vw)-401px)]">
        お気に入りのワイン
      </h3>
      {data ? <MyPage articles={data} /> : <MyPageLoading />}
    </>
  );
};

export default FavoritePage;
