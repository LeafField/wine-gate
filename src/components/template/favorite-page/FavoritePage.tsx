"use client";
import React, { FC } from "react";
import MyPage from "../../organisms/my-page/MyPage";
import { useStore } from "../../../store";
import useQueryMyFavorite from "../../../hooks/useQueryMyFavorite";
import LoadingOverlay from "../../atoms/loading-overlay/LoadingOverlay";

const FavoritePage: FC = () => {
  const { user } = useStore();
  const { data, isLoading } = useQueryMyFavorite(user ? user.id : null);
  return (
    <>
      {data && (
        <MyPage
          articles={data}
          heroTitle="マイページ"
          pageTitle="お気に入りのワイン"
        />
      )}
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default FavoritePage;
