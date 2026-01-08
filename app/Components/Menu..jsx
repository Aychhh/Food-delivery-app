"use client";
import Image from "next/image";
import React, { useState } from "react";
import menuImg from "../Public/open.png";
import closeImg from "../Public/close.png";
import Link from "next/link";
import CartIcon from "./CartIcon";
const Menu = () => {
  const [menu, setMenu] = useState(false);

  const Links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact Us", url: "/" },
  ];

  const user = false;

  return (
    <div>
      {menu ? (
        <Image
          onClick={() => setMenu(false)}
          src={closeImg}
          alt="Cross"
          width={20}
          height={20}
        />
      ) : (
        <Image
          onClick={() => setMenu(true)}
          src={menuImg}
          alt="Menu"
          width={20}
          height={20}
        />
      )}
      {menu && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col  gap-8 items-center justify-center text-3xl z-10">
          {Links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setMenu(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link onClick={() => setMenu(false)} href="/login">
              Login
            </Link>
          ) : (
            <Link onClick={() => setMenu(false)} href="/orders">
              Orders
            </Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
