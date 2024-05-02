"use client";
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { websiteUrl } from "../exports/exportfiles";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const [pending, setPending] = useState<Boolean>(true);
  const buttonStyle = `h-10 mt-2 w-full rounded-lg justify-center flex items-center ${
    pending ? "bg-black  text-white" : "bg-gray-200 text-gray-600"
  }`;

  interface T {
    title: String;
    description: String;
    thumbnailUrl: String;
    imageUrl: string[];
    category: String;
    price: Number;
  }

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { title, description, category, price, thumbnailUrl } =
      Object.fromEntries(formData.entries()) as any;
    const imageUrls: string[] = [];
    const files = formData.getAll("imageUrl");

    for (const file of files) {
      const base64 = await readAsDataURL(file as File);
      imageUrls.push(base64);
    }

    const thumbnailUrlbase64 = await thumbnailBase24(thumbnailUrl);

    const data: T = {
      title: title as string,
      description: description as string,
      thumbnailUrl: thumbnailUrlbase64,
      imageUrl: imageUrls,
      category: category as string,
      price: Number(price),
    };
    // console.log(data);
    await upload(data);
  }

  async function readAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function thumbnailBase24(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  console.log(websiteUrl)

  async function upload(body: object) {
    setPending(false);
    try {
      const response = await fetch(`${websiteUrl}/lib/api/products`, {
        method: "POST",
        body: JSON.stringify(body),
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setPending(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPending(true);
    }
  }

  return (
    <Layout>
      <div className="h-5/4 bg-stone-50 w-3/4">
        <center className="p-4">
          <form
            className="flex flex-col w-80"
            // onSubmit={submitHandler}
          >
            <p className="text-2xl my-2 font-bold text-left">Card details</p>
            <label className="text-left">Images upload</label>
            <label className="text-left">Thumbnail upload</label>
            <input
              className="placeholder-shown:border-gray-500 w-full h-auto block w-full my-1 rounded-md border-0 pl-4 ring-1 ring-gray-300"
              type="file"
              id="myfile"
              name="thumbnailUrl"
              required
            />
            <label className="text-left">Images upload</label>
            <input
              className="placeholder-shown:border-gray-500 w-full h-auto block w-full my-1 rounded-md border-0 pl-4 ring-1 ring-gray-300"
              type="file"
              id="myfile"
              name="imageUrl"
              required
              multiple
            />
            <label className="text-left">Title</label>
            <input
              type="text"
              name="title"
              className="placeholder-shown:border-gray-500 w-full h-8 block w-full my-1 rounded-md border-0 pl-4 ring-1 ring-gray-300"
              placeholder="select your quantity"
              required
            />
            <label className="text-left">Category</label>
            <select
              name="category"
              id="cards"
              className="placeholder-shown:border-gray-500 w-full h-8 block w-full my-1 rounded-md border-0 pl-4 ring-1 ring-gray-300"
              required
            >
              <option value="">Select</option>
              <option value="premium">Premium</option>
              <option value="budget">Budget</option>
            </select>
            <label className="text-left">Price</label>
            <input
              type="number"
              name="price"
              className="placeholder-shown:border-gray-500 w-full h-8 block w-full my-1 rounded-md border-0 pl-4 ring-1 ring-gray-300"
              placeholder="enter price"
              required
            />
            <label className="text-left">Description</label>
            <textarea
              rows={4}
              cols={50}
              name="description"
              className="placeholder-shown:border-gray-500 w-full h-auto block w-full my-1 rounded-md border-0 pt-2 pl-4 ring-1 ring-gray-300"
              placeholder="select your quantity"
              required
            />

            <div className="text-center">
              <button className={buttonStyle} type="submit">
                {pending ? "Submit" : "Uploading"}
              </button>
              <button
                className={`h-10 mt-2 w-full rounded-lg justify-center flex items-center bg-gray-200 text-gray-600`}
                type="reset"
                // onClick={reset}
              >
                Reset
              </button>
            </div>
          </form>
        </center>
        {/* <Image
            src={imageList}
            alt="sample"
            className="bg-red-100 h-80"
            style={{ objectFit: "contain" }}
            loading="lazy"
          /> */}
      </div>
    </Layout>
  );
};

export default Page;
