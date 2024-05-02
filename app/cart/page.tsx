import React from "react";
import { Layout } from "../components/Layout";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/lib/api/products"); // Replace '/api/test' with your actual API route path
    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // This will log { message: "This is a test API endpoint!" }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const page = async () => {
  const data = await fetchData();

  return (
    <Layout>
      <div>page</div>
    </Layout>
  );
};

export default page;
