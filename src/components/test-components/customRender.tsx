import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

export function CustomRender(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
    ),
  });
}
