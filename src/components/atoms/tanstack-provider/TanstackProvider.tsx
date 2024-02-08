"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../utils/queryClient";

import React, { FC, PropsWithChildren } from "react";

const TanstackProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
