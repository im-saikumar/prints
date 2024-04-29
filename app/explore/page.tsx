import React from "react";
import { WeddingCard } from "../ui/WeddingCard";
import { Layout } from "../components/Layout";

const page = () => {
  const array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  return (
    <Layout>
      <section className="justify-center">
      <p className="text-2xl my-5 text-center font-bold">Explore cards</p>
        <div className="container flex flex-wrap justify-center lg:justify-start ">
          {array.map((e, i) => {
            return <WeddingCard key={i} id={i} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default page;
