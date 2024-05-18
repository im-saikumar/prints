"use client";
import React, { Suspense, useEffect, useState } from "react";
import { WeddingCardType } from "@/app/lib/schemas/weddincardSchema";
import Publish from "./publish";
import Loading from "@/app/explore/loading-in";
import { GET } from "@/app/lib/api/products/route";

const Page = () => {
  const [data, setData] = useState<WeddingCardType[]>([]);
  async function fetchData() {
    try {
      const response = await fetch("/lib/api/products");
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function PublishCardList() {
    return data?.map((data: WeddingCardType, i: any) => (
      <Publish key={i} data={data} refetch={fetchData} />
    ));
  }

  return (
    <center className="w-full">
      <p className="text-2xl font-bold my-5">All Cards List</p>
      <Suspense fallback={<Loading />}>
        <PublishCardList />
      </Suspense>
    </center>
  );
};

export default Page;
