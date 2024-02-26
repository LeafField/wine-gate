import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanstackDevTool = () => {
  return <ReactQueryDevtools initialIsOpen={false} />;
};

export default TanstackDevTool;
