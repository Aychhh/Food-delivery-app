import React from "react";
import Menu from "./Menu.";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import phoneImg from "../Public/phone.png";

const Navbar = () => {
  const user = true;
  return (
    <div className="h-12 text-red-500 md:h-24 lg:px-20 xl:px-40 uppercase p-4 flex items-center justify-between border-b-2 border-red-500">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static  bg-orange-300 flex items-center gap-1 px-1 cursor-pointer rounded-md ">
          <Image src={phoneImg} alt="phoneImg" height={20} width={20} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
