"use client";
import React from "react";
import EditingPage from "../../../components/template/editing-page/EditingPage";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getWine } from "../../../utils/fetcher";
import LoadingOverlay from "../../../components/atoms/loading-overlay/LoadingOverlay";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      if (id) {
        const wine = await getWine(id);
        return wine;
      } else return null;
    },
    queryKey: ["editing", id],
    retry: false,
  });
  return <>{isLoading ? <LoadingOverlay /> : <EditingPage wine={data} />}</>;
};

export default Page;
