import React, { Suspense } from "react";
import Link from "next/link";
import { WeddingCard } from "../ui/WeddingCard";
import { HeroImage } from "../admin/heroimage/heroimage";
import Loading from "../explore/loading-in";
import LandingImage from "./LandingImage";

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
      <section className="mt-8">
        <div className="flex justify-between mx-3">
          <p className="font-medium">Latest collections</p>
          <Link href="/explore">
            <p className="font-primary">Explore all</p>
          </Link>
        </div>
        <div className="my-6 flex flex-wrap lg:justify-start  justify-center">
          {array.map((e, i) => {
            return <WeddingCard key={i} id={i} />;
          })}
        </div>
      </section>
      <section>
        <div className="flex justify-between mx-3">
          <p className="font-medium">Premium collections</p>
          <Link href="/explore">
            <p className="font-primary">Explore all</p>
          </Link>
        </div>
        <div className="my-6 flex flex-wrap lg:justify-start  justify-center">
          {array.map((e, i) => {
            return <WeddingCard key={i} id={i} />;
          })}
        </div>
      </section>
      <section>
        <div className="flex justify-between mx-3">
          <p className="font-medium">Budget collections</p>
          <Link href="/explore">
            <p className="font-primary">Explore all</p>
          </Link>
        </div>
        <div className="my-6 flex flex-wrap lg:justify-start  justify-center">
          {array.map((e, i) => {
            return <WeddingCard key={i} id={i} />;
          })}
        </div>
      </section>
      {/* <div className="flex min-w-full">
        <Link href="/explore">
          <Button>submit</Button>
        </Link>
      </div> */}
    </div>
  );
};
