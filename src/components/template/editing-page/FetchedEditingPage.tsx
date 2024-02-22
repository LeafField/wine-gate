import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import useQueryWineOne from "../../../hooks/useQueryWineOne";
import EditingPage from "./EditingPage";

const FetchedEditingPage: FC = () => {
  const searchParams = useSearchParams();
  const wine_id = searchParams.get("id");
  const { data } = useQueryWineOne(wine_id);

  return <EditingPage wine={data} />;
};

export default FetchedEditingPage;
