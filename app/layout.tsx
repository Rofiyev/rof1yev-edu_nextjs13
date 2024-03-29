import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { Footer, Header, Next13NProgress, Sidebar } from "@/components";
import { Flex } from "@chakra-ui/react";
import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "500" });

export const metadata: Metadata = {
  title: "Rof1yev - Online Education",
  description: "Rof1yev Online Education Development",
  icons: {
    icon: "../assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Next13NProgress color="#38a169" height={3} />
          <Header />
          <Flex>
            <Sidebar />
            <Flex
              ml={{ sm: "0px", xl: "300px" }}
              direction={"column"}
              flex={"1"}
            >
              {children}
              <Footer />
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
