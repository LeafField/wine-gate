import React from "react";
import SelectPage from "../../../components/template/select-page/SelectPage";

export const revalidate = 60 * 60 * 24;

const page = async () => {
  return <SelectPage />;
};

export default page;
