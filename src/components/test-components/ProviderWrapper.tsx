import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { queryClient } from "../../utils/queryClient";
import { MantineProvider } from "@mantine/core";

export const ProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>{children}</MantineProvider>
    </QueryClientProvider>
  );
};
