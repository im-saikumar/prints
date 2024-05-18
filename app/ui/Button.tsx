"use client";

import React from "react";
import { Children } from "../components/Layout";
import { usePathname, useRouter } from "next/navigation";
export const Button = ({ children, ...props }: Children | any) => {
  return (
    <button
      {...props}
      className="primary hover:text-white  hover:bg-[#1971c4] py-2 md:w-40 sm:w-auto h-10 rounded"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, ...props }: Children | any) => {
  return (
    <button
      {...props}
      className="bg-gray-300 text-gray-800 hover:bg-gray-400 py-2 md:w-40 sm:w-auto h-10 rounded"
    >
      {children}
    </button>
  );
};

export const AdminButton = ({ children }: Children, props: () => {}) => {
  return (
    <button
      {...props}
      className="bg-indigo-500  hover:bg-indigo-600 py-2 px-6 h-10 rounded-full text-white"
    >
      {children}
    </button>
  );
};

export const BackButton = () => {
  const pathname: any = usePathname();
  const path = pathname.split("/").slice(0, -1).join("/");
  const router = useRouter();
  return (
      <Circle onClick={() => router.back()}
        className="bg-indigo-500  hover:bg-indigo-600 py-2 px-6 h-10 rounded-full text-white"
      >
        {backarrow}
      </Circle>
  );
};

export const arrow = "->";
export const backarrow = "<-";

export const Circle = ({ children, ...props }: Children | any) => {
  return (
    <button
      {...props}
      className="primary shadow-lg shadow-blue-500/50 font-secondary h-8 w-8 rounded-full flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export const locationIcon = (
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
export const deleteIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
      clipRule="evenodd"
    />
  </svg>
);

export const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);
