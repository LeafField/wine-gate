import React from "react";
import SelectPage from "../../../components/template/select-page/SelectPage";

export const revalidate = 86400;
export const runtime = "edge";

const page = async () => {
  return <SelectPage />;
};

export default page;
