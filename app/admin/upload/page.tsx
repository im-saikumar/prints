import React from "react";
import { Layout } from "../../components/Layout";
import { redirect, usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import { json } from "node:stream/consumers";
import UploadImage from "./uploadimage";
import { createPost } from "@/app/lib/api/products/route";

export interface T {
  title: String;
  description: String;
  thumbnailUrl: File;
  imageUrl: FileList | any;
  category: String;
  price: Number;
}

const Page = () => {
  // const [pending, setPending] = useState<Boolean>(true);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const { title, description, category, price, thumbnailUrl, imageUrl }: any = event.target;

    const formData = new FormData(event.currentTarget);

    const data: T | any = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: formData.get("price"),
      thumbnailUrl: formData.get("thumbnailUrl"),
      imageUrl: formData.getAll("imageUrl"),
    };
    await upload(data);
  }

  async function upload(body: any) {
    const formdata = new FormData();
    formdata.append("title", body.title);
    formdata.append("description", body.description);
    formdata.append("thumbnailUrl", body.thumbnailUrl);
    formdata.append("imageUrl", body.imageUrl);
    formdata.append("category", body.category);
    formdata.append("price", body.price);
    // setPending(false);
    try {
      const response = await fetch("/lib/api/products", {
        method: "POST",
        body: JSON.stringify(formdata),
        cache: "no-cache",
      });
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // setPending(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setPending(true);
    }
  }

  async function imageUpoad(formData: FormData) {
    "use server";
    const data: T | any = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      price: formData.get("price"),
      thumbnailUrl: formData.get("thumbnailUrl"),
      imageUrl: formData.getAll("imageUrl"),
    };
    console.log(data);
    await createPost(data);
  }

  return (
    <Layout>
      <UploadImage imageUpoad={imageUpoad} />
    </Layout>
  );
};

export default Page;
