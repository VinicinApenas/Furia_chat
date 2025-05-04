import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "FURIA Fans Chat",
  description: "Um chat interativo para torcedores da FURIA Esports",
  icons: [{ rel: "icon", url: "/favicon_furia.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable}`}>
      <body className="bg-black text-white font-sans min-h-screen">
        <TRPCReactProvider>
          <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
