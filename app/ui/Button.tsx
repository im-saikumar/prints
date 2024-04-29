"use client";

import React from "react";
import { Children } from "../components/Layout";
export const Button = ({ children }: Children, props: () => {}) => {
  return (
    <button
      {...props}
      className="primary  hover:bg-[#1971c4] py-2 w-40 h-10 rounded"
    >
      {children}
    </button>
  );
};

export const arrow = "->";
export const backarrow = "<-";

export const Circle = ({ children }: Children, props: () => {}) => {
  return (
    <button
      {...props}
      className="primary shadow-lg shadow-blue-500/50 font-secondary h-8 w-8 rounded-full flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);
