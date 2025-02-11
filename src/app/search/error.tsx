"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h2 className="text-3xl mb-4">Something went wrong</h2>
      <button className="text-blue-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
