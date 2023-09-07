"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBoxComponent() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("term");
  const [searchValue, setSearchValue] = useState(searchTerm || "");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/search/web?term=${searchValue}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-grow hover:bg-gray-200 hover:shadow-md active:shadow-md focus-within:bg-gray-200 focus-within:shadow-md mr-5 md:mr-16 md:ml-10 ml-3 max-w-3xl border border-gray-200 md:px-6 px-3 py-3 rounded-full shadow-md"
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full bg-transparent focus:outline-none"
      />
      <RxCross2
        onClick={() => setSearchValue("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-3"
      />
      <BsFillMicFill className="text-4xl mr-3 text-blue-500 cursor-pointer pl-4 border-gray-300 border-l-2 hidden sm:inline-flex" />
      <AiOutlineSearch onClick={handleSubmit} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </form>
  );
}
