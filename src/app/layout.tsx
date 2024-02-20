import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/userContext";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cadastro de usuários",
  description:
    "Pequeno CRUD para cadastro de usuários utilizando Next.js + Express + Prisma + SQLite3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={poppins.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
