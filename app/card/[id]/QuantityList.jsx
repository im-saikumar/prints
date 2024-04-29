import React from "react";

const QuantityList = ({ quantity, selectedQuantity, setSelectedQuantity }) => {
  return (
    <>
      {quantity.map((value, index) => {
        const styles = `h-8 w-30 rounded-lg justify-center flex items-center ${
          selectedQuantity === value ? "primary" : "secondary"
        }`;
        return (
          <p
            onClick={() => setSelectedQuantity(value)}
            key={index}
            className={styles}
          >
            {value}
          </p>
        );
      })}
    </>
  );
};

export default QuantityList;
