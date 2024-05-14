"use client";
import { Button, SecondaryButton } from "@/app/ui/Button";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { PreviewImage } from "./heroimage";
import { revalidatePath } from "next/cache";

const Page = () => {
  const [input, setInput] = useState({
    title: "",
    image: "",
  });

  const [imagepath, setImagepath] = useState("");

  function reset() {
    setImagepath("");
    setInput({
      title: "",
      image: "",
    });
  }

  async function submit(formData: any) {
    try {
      const response = await fetch("/lib/api/heroimage", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      revalidatePath("/", "layout");
      redirect("/admin");
    }
  }

  return (
    <center className="container px-2" style={{ minHeight: "90vh" }}>
      <div className="flex flex-col h-80 w-auto justify-center items-center secondary my-5 rounded">
        {imagepath && <PreviewImage image={imagepath} />}
        {!imagepath && <p className="font-bold text-2xl">Preview image here</p>}
      </div>
      <form action={submit}>
        <div className="flex flex-col md:flex-row my-2 gap-2 justify-center">
          <input
            className="px-2 my-1 h-10"
            type="text"
            placeholder="enter the title"
            name="title"
          />
          <input
            className="flex pt-1.5 px-2 my-1 h-10 bg-white"
            placeholder="upload the image"
            type="file"
            name="image"
            value={input?.image}
            onChange={(e: any) => {
              setInput((value) => (value.image = e.target.files[0]));
              setImagepath(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </div>
        <section className="gap-2 flex-col md:flex-row flex my-5 justify-center">
          <Button type="submit">submit</Button>
          <SecondaryButton type="reset" onClick={reset}>
            reset
          </SecondaryButton>
        </section>
      </form>
    </center>
  );
};

export default Page;
