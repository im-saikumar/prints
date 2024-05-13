import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="px-6 py-5 mb-2 primary text-white font-light">
      <nav className="flex items-center justify-between">
        <p className="w-auto">Menu</p>
        <Link href="/">
          <p className="font-bold w-auto text-center">SP</p>
        </Link>
        <div className="flex w-auto justify-end">
          {/* <p className="px-2">account</p>
          <p className="px-2">orders</p> */}

          <Link href="/cart">
            <p className="pl-2">cart(0)</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
