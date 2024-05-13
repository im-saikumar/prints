import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  // return <span className={styles.loader}></span>;
  return (
    <svg className={styles.svg} viewBox="25 25 50 50">
      <circle className={styles.circle} r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default Spinner;
