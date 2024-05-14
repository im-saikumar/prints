"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WeddingCard } from "../ui/WeddingCard";
import { WeddingCardType } from "../lib/schemas/weddincardSchema";

const Category = ({ sort }: { sort: string }) => {
  const [data, setData] = useState<WeddingCardType[]>([]);
  async function fetchData() {
    try {
      // const response = await fetch('/lib/api'); // Replace '/api/test' with your actual API route path
      const response = await fetch(`/lib/api/products?sort=${sort}`, {
        cache: "no-store",
      }); // Replace '/api/test' with your actual API route path
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      const firstSixList = data.slice(0, 5);
      setData(firstSixList); // This will log { message: "This is a test API endpoint!" }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await fetch('/lib/api'); // Replace '/api/test' with your actual API route path
        const response = await fetch(`/lib/api/products?sort=${sort}`, {
          cache: "no-store",
        }); // Replace '/api/test' with your actual API route path
        if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
        }
        const data = await response.json();
        const firstSixList = data.slice(0, 5);
        setData(firstSixList); // This will log { message: "This is a test API endpoint!" }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [sort]);

  return (
    <section className="mt-8">
      <div className="flex justify-between mx-3">
        <p className="font-medium">{sort} collections</p>
        <Link href="/explore">
          <p className="font-primary">Explore all</p>
        </Link>
      </div>
      <div className="my-6 flex flex-wrap lg:justify-start  justify-center">
        {data.map((data, i) => {
          return <WeddingCard key={i} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Category;
