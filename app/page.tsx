import Image from "next/image";
import { Homepage } from "./components/Homepage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";

export default function Home() {
  return (
    <main>
      <Layout>
        <Homepage />
      </Layout>
    </main>
  );
}
