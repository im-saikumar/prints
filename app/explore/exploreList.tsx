"use client";
import { useEffect, useState } from "react";
import { WeddingCardType } from "../lib/schemas/weddincardSchema";
import { WeddingCard } from "../ui/WeddingCard";

export default function ExploreList() {
  const [data, setData] = useState<WeddingCardType[]>([]);
  async function fetchData() {
    try {
      // const response = await fetch('/lib/api'); // Replace '/api/test' with your actual API route path
      const response = await fetch("/lib/api/products?publish=true"); // Replace '/api/test' with your actual API route path
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      setData(data); // This will log { message: "This is a test API endpoint!" }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.length > 0 &&
        data.map((value, i) => {
          return <WeddingCard key={i} data={value} />;
        })}
    </>
  );
}
