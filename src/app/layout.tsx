import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

export const metadata: Metadata = {
  title: "B1G Player – Official IPTV App & B1G IPTV Subscription",
  description: "B1G Player is the official app for B1G IPTV subscriptions. Access live TV, sports, movies and series on supported Firestick and Android devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased light"
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-[#12141F] selection:bg-[#E01E26] selection:text-white font-sans">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
