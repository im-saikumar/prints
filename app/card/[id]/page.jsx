"use client";
import { Layout } from "@/app/components/Layout";
import { Circle, backarrow } from "@/app/ui/Button";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import QuantityList from "./QuantityList";

const Page = () => {
  const params = useParams();
  const quantity = [500, 800, 1000, "other"];
  const [selectedQuantity, setSelectedQuantity] = useState(500);
  const [inputQuantity, setInputQuantity] = useState(300);
  const [range, setRange] = useState(false);
  const price = 25;
  const total =
    price * (selectedQuantity !== "other" ? selectedQuantity : inputQuantity);
  const indianPrice = total.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  useEffect(() => {
    if (selectedQuantity !== "other") {
      setRange(false);
      setInputQuantity(300);
    }
  }, [selectedQuantity]);

  function validate(value) {
    let result = false;
    const check = value;
    if (selectedQuantity === "other") {
      if (check >= 300 && check <= 2000) {
        result = false;
      } else {
        result = true;
      }
    } else {
      result = false;
    }
    setRange(result);
  }

  const buttonStyle = `h-10 mt-2 w-full rounded-lg justify-center flex items-center ${
    !range ? "bg-black" : "bg-gray-200"
  } text-white`;

  return (
    <Layout>
      <section className="min-w-full text-center flex-col md:max-w-2xl">
        <div className="my-5 flex container min-w-full justify-center">
          <Link href={"/explore"}>
            <Circle>{backarrow}</Circle>
          </Link>
          <div className="text-2xl mx-2 font-bold">
            wedding card {params.id}
          </div>
        </div>
        <main className="max-w-md mx-auto h-4/5 overflow-hidden md:max-w-3xl">
          <div className="md:flex h-full w-full">
            <div className="secondary rounded md:shrink-0 md:h-full h-1/2 md:m-0 m-2 md:w-2/3 sm:w-full">
              <p className="object-cover h-full w-full">image</p>
            </div>
            <div className="px-2 w-full">
              <div className="bg-white shadow-md min-h-mix  rounded-md text-left p-4">
                <p>Select Quality</p>
                <div className="my-2 grid gap-2 grid-cols-2">
                  <QuantityList
                    quantity={quantity}
                    setSelectedQuantity={setSelectedQuantity}
                    selectedQuantity={selectedQuantity}
                  />
                </div>
                {selectedQuantity === "other" && (
                  <input
                    type="number"
                    value={inputQuantity}
                    className="placeholder-shown:border-gray-500 w-full h-8 my-4 block w-full rounded-md border-0 pl-4 ring-1 ring-gray-300"
                    placeholder="select your quantity"
                    onChange={(e) => {
                      setInputQuantity(e.target.value);
                      validate(e.target.value);
                    }}
                  />
                )}
                {range && (
                  <p className="text-sm my-2 text-red-500">
                    select in range of 300 to 2000
                  </p>
                )}
                <p className="font-bold text-xl">Rs. {indianPrice}</p>
                <button
                  disabled={range}
                  onClick={() => console.log("clicked")}
                  className={buttonStyle}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </Layout>
  );
};

export default Page;
