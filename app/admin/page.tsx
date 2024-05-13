import React from "react";
import { Layout } from "../components/Layout";
import { AdminButton, Button } from "../ui/Button";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
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
          <Link href={"/admin/publish"}>Publish status</Link>
        </AdminButton>
      </center>
    </Layout>
  );
};

export default page;
