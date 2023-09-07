import "./../globals.css";
import { Roboto } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={`${roboto.className} relative bg-gray-100`}>
        <SearchHeader />
        {children}
      </div>
  );
}
