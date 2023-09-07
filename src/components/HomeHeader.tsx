import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end items-center space-x-4 p-4 absolute right-0 left-0 top-0">
        <Link href="" className="hover:underline text-sm">Gmail</Link>
        <Link href="" className="hover:underline text-sm">Images</Link>
        <TbGridDots className="hover:bg-gray-200 text-4xl p-2 rounded-full" />
        <button className="bg-blue-500 text-white py-2 px-5 hover:brightness-105 hover:shadow-md rounded">Sign In</button>
    </header>
  )
}
