"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import theme from "@/theme";
import { StateContext } from "@/context/StateContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <CSSReset />
      <NextNProgress
        color="#38a169"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ChakraProvider theme={theme}>
        <StateContext>{children}</StateContext>
      </ChakraProvider>
    </CacheProvider>
  );
}
