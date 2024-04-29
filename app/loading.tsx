import React from "react";
import { Layout } from "./components/Layout";

const Loading = () => {
  return (
    <Layout>
      <div className="flex min-w-full min-h-full justify-center items-center">
      <span>Loading...</span>
      </div>
    </Layout>
  );
};

export default Loading;
