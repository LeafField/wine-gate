"use client";
import React, { useEffect } from "react";
import MyPage from "../../organisms/my-page/MyPage";
import useQueryMyPostWine from "../../../hooks/useQueryMyPostWine";
import { useStore } from "../../../store";
import { useQueryClient } from "@tanstack/react-query";
import LineUpHero from "../../molecules/lineup-hero/LineUpHero";
import MyPageLoading from "../../molecules/mypage-loading/MyPageLoading";

const MyPostPage = () => {
  const { user } = useStore();
  const { data } = useQueryMyPostWine(user ? user.id : null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!user && !data) {
      queryClient.removeQueries({ queryKey: ["myPostWine"] });
    }
  }, [queryClient, data, user]);

  return (
    <>
      <LineUpHero title="マイページ" />
      <h3 className="mx-4 border-b-2 border-red text-heading2 sort tablet:mx-0 tablet:w-[calc(var(--vw)-401px)]">
        投稿したワイン
      </h3>
      {data ? <MyPage articles={data} /> : <MyPageLoading />}
    </>
  );
};

export default MyPostPage;
