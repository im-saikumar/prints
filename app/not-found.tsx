import Link from "next/link";
import { Layout } from "./components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="justify-center items-center flex flex-col">
        <h2 className="text-4xl font-bold" >Not Found</h2>
        <p>Could not find requested resource</p>
        <Link className="font-primary" href="/">Return Home</Link>
      </div>
    </Layout>
  );
}
