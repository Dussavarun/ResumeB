import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import RouteChangeLoader from "./components/RouteChangeLoader";
import { ReduxProvider } from "@/components/ReduxProviderWrapper";
import RouteLoader from "@/components/GlobalLoader";
import Providers from "@/components/AuthSessionProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Build and manage your resume with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {/* <RouteChangeLoader/> */}
          <RouteLoader/>
          <Providers>
          <ReduxProvider>{children}</ReduxProvider>
          </Providers>
      </body>
    </html>
  );
}
