import React from "react";
import Spinner from "../ui/Spinner";

const Loading = () => {
  return (
    <div className="flex min-w-full min-h-full justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loading;
