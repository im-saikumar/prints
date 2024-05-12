import Link from "next/link";
import React from "react";
import { Circle, arrow } from "./Button";
import { PreviewImage } from "../admin/heroimage/heroimage";
import { WeddingCardType } from "../lib/schemas/weddincardSchema";

export const WeddingCard = async ({data}: any) => {
  const card : WeddingCardType = await data;
  // const image = data.thumbnailUrl;
  return (
    <main className="h-80 w-60 bg-white shadow-lg rounded-xl flex flex-col px-7 py-7 mx-2 my-2">
      {/* <img
        src={image}
        alt="thumbnail-image"
        className="h-60 min-w-full primary rounded mb-5 object-cover"
      /> */}
      <div className="h-60 min-w-full primary rounded mb-5 object-cover">
        <PreviewImage image={card.thumbnailUrl as string} />
      </div>
      <div className="min-w-full flex items-center justify-between">
        <p className="text-sm h-8 rounded-full secondary px-4 items-center justify-center flex">
          ₹ <span className="font-extrabold text-lg">{card.price}</span> / per card
        </p>
        <Circle>
          <Link href={`/card/${card._id}`}>{arrow}</Link>
        </Circle>
      </div>
    </main>
  );
};
