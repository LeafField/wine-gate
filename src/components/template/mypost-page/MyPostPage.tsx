"use client";
import React from "react";
import MyPage from "../../organisms/my-page/MyPage";
import useQueryMyPostWine from "../../../hooks/useQueryMyPostWine";
import { useStore } from "../../../store";
import LoadingOverlay from "../../atoms/loading-overlay/LoadingOverlay";

const MyPostPage = () => {
  const { user } = useStore();
  const { data, isLoading } = useQueryMyPostWine(user ? user.id : null);
  return (
    <>
      {data && (
        <MyPage
          articles={data}
          heroTitle="マイページ"
          pageTitle="投稿したワイン"
        />
      )}
      {isLoading && <LoadingOverlay />}
    </>
  );
};

export default MyPostPage;
