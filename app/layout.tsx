import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import "./globals.css";
import NavWithSplash from "@/components/NavWithSplash";
import Footer from "@/components/Footer";
import { SplashProvider } from "@/components/SplashContext";
import SplashOverlay from "@/components/SplashOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Qianqian Wei Portfolio",
  description: "Qianqian Wei Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kalam.variable} antialiased`}>
        <SplashProvider>
          <SplashOverlay />
          <NavWithSplash />
          {children}
          <Footer />
        </SplashProvider>
        <Analytics />
      </body>
    </html>
  );
}
