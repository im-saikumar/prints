import React from "react";
import UploadImage from "./uploadimage";

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
    <>
      <UploadImage />
    </>
  );
};

export default Page;
