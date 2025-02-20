import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import styles from "./layout.module.css";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Furkan's Blog!",
  description: "The only roof where my ideas and your ideas meet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={styles.homeContainer}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
