import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export type Children = {
  children: ReactNode;
};

export const Layout = ({ children }: Children) => {
  return (
    <div>
      <Header />
      <div
        className="min-h-full justify-center flex"
        style={{ minHeight: "90vh" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
