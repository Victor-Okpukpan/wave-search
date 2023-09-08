"use client";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term");
  const router = useRouter();

  function selectTab(tab: string) {
    router.push(
      `/search/${tab === "Image" ? "image" : "web"}?term=${searchTerm}`
    );
  }

  return (
    <nav className="flex items-center border-b space-x-2 justify-center mt-2 md:justify-start md:pl-52 pl-8">
      <button
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-b-transparent active:text-blue-500 pb-3 px-2 ${
          pathName === "/search/web" && "!border-b-blue-500 text-blue-500"
        }`}
      >
        <AiOutlineSearch />
        <p>All</p>
      </button>
      <button
        onClick={() => selectTab("Image")}
        className={`flex items-center space-x-1 border-b-4 border-b-transparent active:text-blue-500 pb-3 px-2 ${
          pathName === "/search/image" && "!border-b-blue-500 text-blue-500"
        }`}
      >
        <AiOutlineCamera />
        <p>Image</p>
      </button>
    </nav>
  );
}
