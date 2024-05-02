"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="justify-center items-center flex flex-col">
      <h2 className="text-4xl font-bold">Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
