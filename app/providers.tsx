"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { StateContext } from "@/context/StateContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <CSSReset />
      <ChakraProvider theme={theme}>
        <StateContext>{children}</StateContext>
      </ChakraProvider>
    </CacheProvider>
  );
}
