import React, { FC } from "react";
import EditingPage from "../../../../components/template/editing-page/EditingPage";
import { getWine } from "../../../../utils/fetcher";

type Props = {
  params: {
    id: string;
  };
};

export const runtime = "edge";

const FetchedEditingPage: FC<Props> = async ({ params }) => {
  const wine = await getWine(params.id);
  return <EditingPage wine={wine} />;
};

export default FetchedEditingPage;
