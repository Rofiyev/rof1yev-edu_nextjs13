import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { Footer, Header } from "@/components";

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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
