"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const UploadImage = () => {
  const [pending, setPending] = useState<Boolean>(false);
  async function imageUpoad(formData: FormData) {
    setPending(true);
    try {
      const response = await fetch("/lib/api/products", {
        method: "POST",
        body: formData,
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setPending(false);
      redirect("/admin");
    }
  }

  function reset() {
    setPending(false);
  }

  const buttonStyle = `h-10 mt-2 w-full rounded-lg justify-center flex items-center ${
    !pending ? "bg-black  text-white" : "bg-gray-200 text-gray-600"
  }`;

  return (
    <div className="container h-5/4 bg-stone-50">
      <center className="p-4">
        <form
          className="flex flex-col lg:w-80 md:w-80 sm:w-auto"
          action={imageUpoad}
        >
          <p className="text-2xl my-2 font-bold text-left">Card details</p>
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
            // required
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
            // required
          />

          <div className="text-center">
            <button
              className={buttonStyle}
              disabled={pending as boolean}
              type="submit"
            >
              {!pending ? "Submit" : "Uploading"}
            </button>
            <button
              className={`h-10 mt-2 w-full rounded-lg justify-center flex items-center bg-gray-200 text-gray-600`}
              type="reset"
              onClick={reset}
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
  );
};

export default UploadImage;
