import FooterComponent from "@/components/FooterComponent";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaveSearch",
  description:
    "Dive into effortless web exploration with Search Wave. Discover information faster and easier. Start surfing the web with us today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} max-w-[1400px] mx-auto relative border-none min-h-screen`}
      >
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
