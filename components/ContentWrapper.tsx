"use client";

import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <Box as="main" mt={"20"} overflowX={"hidden"} minHeight={"80vh"}>
      <Container maxW="container.xl">
        <Box p={{ sm: "0", md: "6" }}>{children}</Box>
      </Container>
    </Box>
  );
}
