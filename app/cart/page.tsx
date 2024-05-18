"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  async function fetchData() {
    try {
      // const response = await fetch('/lib/api'); // Replace '/api/test' with your actual API route path
      const response = await fetch("/lib/api/products"); // Replace '/api/test' with your actual API route path
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // This will log { message: "This is a test API endpoint!" }
      setData(data); // This will log { message: "This is a test API endpoint!" }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((data, i) => {
        return <li key={i}>{data.category}</li>;
      })}
    </div>
  );
};

export default Page;
