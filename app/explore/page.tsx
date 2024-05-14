import React, { Suspense } from "react";
import Loading from "./loading-in";
import ExploreList from "./exploreList";

const page = () => {
  return (
    <section className="justify-center">
      <p className="text-2xl my-5 text-center font-bold">Explore cards</p>
      <div className="container flex flex-wrap justify-center lg:justify-start ">
        <Suspense fallback={<Loading />}>
          <ExploreList />
        </Suspense>
      </div>
    </section>
  );
};

export default page;
