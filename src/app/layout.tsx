import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TrekPack",
  description: "Organiser au mieux votre sac de trek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
