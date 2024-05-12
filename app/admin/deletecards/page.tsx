"use client";
import { Layout } from "@/app/components/Layout";
import React, { Suspense, useEffect, useState } from "react";
import { WeddingCardType } from "@/app/lib/schemas/weddincardSchema";
import AlertModal from "@/app/components/Modal";
import Loading from "@/app/explore/loading-in";
import { CardList } from "./cardlist";

const Page = () => {
  const [data, setData] = useState<WeddingCardType[]>([]);
  const [openModal, setOpenModel] = useState<Boolean>(false);
  const [cardId, setCardID] = useState<string>("");

  async function fetchData() {
    try {
      const response = await fetch("/lib/api/products");
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function deletCard(id: string) {
    try {
      const response = await fetch(`/lib/api/products?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      await fetchData();
      setOpenModel(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function model(id: string) {
    setOpenModel(true);
    setCardID(id);
  }

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <CardList cardlist={data} model={model} />
      </Suspense>
      {openModal && (
        <AlertModal
          onCancel={() => setOpenModel(false)}
          onOkay={() => deletCard(cardId)}
        />
      )}
    </Layout>
  );
};

export default Page;
