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
  return (
    <Layout>
      <UploadImage />
    </Layout>
  );
};

export default Page;
