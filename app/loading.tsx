import React from "react";
import { Layout } from "./components/Layout";
import styles from "./ui/spinner.module.css";

const Loading = () => {
  return (
    <Layout>
      <div className="flex min-w-full min-h-full justify-center items-center">
      <span className={styles.loader}></span>
      </div>
    </Layout>
  );
};

export default Loading;
