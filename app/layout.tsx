import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainProvider from "./_sections/provider";
import MainNavbar from "./_sections/navbar";

const poppins = Poppins({
  weight: ["300", "400", "500"],
  variable: "--poppins-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicole Amoguis",
  description:
    "My portfolio reflects my commitment to delivering high-quality software while continuously adapting to new challenges and technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased w-full bg-[#1F1F1F]`}>
        <MainProvider>
          <MainNavbar />
          <div className="p-5 w-full">{children}</div>
        </MainProvider>
      </body>
    </html>
  );
}
