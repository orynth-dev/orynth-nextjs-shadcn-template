import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import ContextProvider from '../components/context'
import { cn } from "../lib/utils"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Orynth Website Builder",
  description: "Build stunning web3 websites with Solana integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
