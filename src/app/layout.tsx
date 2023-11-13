import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./_components/Header";
import theme from "@/styles/theme";

export const metadata: Metadata = {
  title: "Kyo_s_s Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <ChakraProvider theme={theme}>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
