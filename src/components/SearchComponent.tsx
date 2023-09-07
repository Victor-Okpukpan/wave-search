"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function SearchComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!searchValue.trim()) return;
    router.push(`/search/web?term=${searchValue}`);
  }

  async function randomWordGenerator() {
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?term=${response}`);
    setLoading(false);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-5 py-40 border">
      <h1 className="font-bold text-5xl animate-pulse">WaveSearch</h1>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 border w-[90%] md:max-w-xl lg:max-w-2xl p-3 rounded-full hover:bg-gray-200 hover:shadow-md active:shadow-md focus-within:bg-gray-200 focus-within:shadow-md">
        <AiOutlineSearch className="text-xl cursor-pointer" />
        <input
          type="text"
          className="bg-transparent flex-grow focus:outline-none"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <BsFillMicFill className="text-xl cursor-pointer" />
      </form>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <button onClick={handleSubmit} className="btn">
          Search the Wave
        </button>
        <button
          disabled={loading}
          className="btn"
          onClick={randomWordGenerator}
        >
          {loading ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="spinner.svg"
              alt="Loading..."
              className="h-5 text-center"
            />
          ) : (
            "Surprise yourself"
          )}
        </button>
      </div>
    </main>
  );
}
