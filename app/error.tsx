"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Button } from "./ui/Button";
import Link from "next/link";

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
    <Layout>
      <div className="justify-center items-center flex flex-col">
        <h2 className="m-2 text-4xl font-bold">Something went wrong!</h2>
        <button
          className="primary  hover:bg-[#1971c4] py-2 w-40 h-10 rounded"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </Layout>
  );
}
