import Link from "next/link";
import React from "react";
import { Circle, arrow } from "./Button";

export const WeddingCard = (props: any) => {
  return (
    <main className="h-80 w-60 bg-white shadow-lg rounded-xl flex flex-col px-7 py-7 mx-2 my-2">
      <div className="h-60 min-w-full primary rounded mb-5">WeddingCard</div>
      <div className="min-w-full flex items-center justify-between">
        <p className="text-sm h-8 rounded-full secondary px-4 items-center justify-center flex">
          ₹ <span className="font-extrabold text-lg">20</span>/ per card
        </p>
        <Circle>
          <Link href={`/card/${props.id}`}>{arrow}</Link>
        </Circle>
      </div>
    </main>
  );
};
