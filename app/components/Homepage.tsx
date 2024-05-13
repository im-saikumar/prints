import React, { Suspense } from "react";
import Link from "next/link";
import { WeddingCard } from "../ui/WeddingCard";
import { HeroImage } from "../admin/heroimage/heroimage";
import Loading from "../explore/loading-in";
import LandingImage from "./LandingImage";
import Category from "./category";

export const Homepage = () => {
  const array = new Array(1, 2, 3, 4, 5, 6);
  // const getData = getPosts()

  return (
    <div className="container" style={{ minHeight: "90vh" }}>
      <p className="flex justify-center font-bold text-4xl my-5">Welcome</p>
      <div className="flex flex-col h-80 w-auto justify-center items-center secondary my-5 rounded mx-2">
        <Suspense fallback={<Loading />}>
          <LandingImage />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Category sort="latest" />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Category sort="premium" />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Category sort="budget" />
      </Suspense>
      
    </div>
  );
};
