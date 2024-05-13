"use client";
import { Layout } from "@/app/components/Layout";
import { Button, SecondaryButton } from "@/app/ui/Button";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { PreviewImage } from "./heroimage";

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
      redirect("/admin");
    }
  }

  return (
    <Layout>
      <center className="container" style={{ minHeight: "90vh" }}>
        <form action={submit}>
          <div className="flex flex-col h-80 w-auto justify-center items-center secondary my-5 rounded mx-2">
            {imagepath && <PreviewImage image={imagepath} />}
            {!imagepath && (
              <p className="font-bold text-2xl">Preview image here</p>
            )}
          </div>
          <div className="h-8 flex my-2 gap-2 justify-center">
            <input
              className="px-2"
              type="text"
              placeholder="enter the title"
              name="title"
            />
            <input
              className="px-2 bg-white"
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
          <section className="gap-2 flex my-5 justify-center">
            <Button type="submit">submit</Button>
            <SecondaryButton type="reset" onClick={reset}>
              reset
            </SecondaryButton>
          </section>
        </form>
      </center>
    </Layout>
  );
};

export default Page;
