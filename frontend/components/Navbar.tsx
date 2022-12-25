import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white flex item-center sm:justify-between justify-around py-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" height={35} width={40} alt="logo" />
          <span className="font-bold ml-2 text-primary">Creative Nepal</span>
        </div>
      </Link>

      <ul className="md:flex items-center hidden">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Documentation</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Pricing</a>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
