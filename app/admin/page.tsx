import React from "react";
import { AdminButton, Button } from "../ui/Button";
import Link from "next/link";

const page = () => {
  return (
    <center className="mt-4 flex lg:flex-row sm:flex-col flex-col gap-2">
      <AdminButton>
        <Link href={"/admin/upload"}>Upload card</Link>
      </AdminButton>
      <AdminButton>
        <Link href={"/admin/heroimage"}>Upload Hero Image</Link>
      </AdminButton>
      <AdminButton>
        <Link href={"/admin/deletecards"}>Delete cards</Link>
      </AdminButton>
      <AdminButton>
        <Link href={"/admin/updatecard"}>Update cards</Link>
      </AdminButton>
      <AdminButton>
        <Link href={"/admin/publish"}>Publish cards</Link>
      </AdminButton>
    </center>
  );
};

export default page;
