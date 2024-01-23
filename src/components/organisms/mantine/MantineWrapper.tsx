"use client";
import React, { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

const MantineWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};

export default MantineWrapper;
