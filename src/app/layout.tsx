import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChainSchema } from "@initia/initia-registry-types/zod";
import { Config } from "@/configs";
import { WalletWidgetProvider } from "@initia/react-wallet-widget";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "init.place",
  description: "init.place",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  const iplaceSchema = ChainSchema.parse(Config.initiaSchema.iplace)

  // registerProtoRegistry()

  return (
    <html lang="en">
    <body className={inter.className}>
    <WalletWidgetProvider customLayer={iplaceSchema}>
      <Navbar/>
      {children}
    </WalletWidgetProvider>
    </body>
    </html>
  );
}
