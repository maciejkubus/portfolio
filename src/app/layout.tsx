import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "800"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
				{children}
				<Footer />
			</body>
    </html>
  );
}
