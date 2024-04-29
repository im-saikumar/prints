import React from "react";
import { Layout } from "./components/Layout";
import Spinner from "./ui/Spinner";

const Loading = () => {
  return (
    <Layout>
      <div className="flex min-w-full min-h-full justify-center items-center">
        <Spinner/>
      </div>
    </Layout>
  );
};

export default Loading;
