import Link from "next/link";
import SearchBoxComponent from "./SearchBoxComponent";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="p-4">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-5xl animate-pulse">
          WaveSearch
        </Link>
        <div className="flex-1">
          <SearchBoxComponent />
        </div>
        <div className="flex items-center">
          <RiSettings3Line className="hover:bg-gray-200 text-4xl p-2 rounded-full" />
          <TbGridDots className="hover:bg-gray-200 text-4xl p-2 rounded-full" />
        </div>
        <button className="bg-blue-500 text-white py-2 px-5 hover:brightness-105 hover:shadow-md rounded">Sign In</button>
      </div>
      <SearchHeaderOptions />
    </header>
  )
}
