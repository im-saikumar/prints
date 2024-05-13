import React from "react";
import { Layout } from "../components/Layout";
import { AdminButton, Button } from "../ui/Button";
import Link from "next/link";

const page = () => {
  return (
    <Layout>
      <section className="container flex flex-warp my-2 gap-2 justify-center">
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
      </section>
    </Layout>
  );
};

export default page;
