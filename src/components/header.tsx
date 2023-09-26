"use client";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

import "../styles/navbar.css";

function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", changeColor);
    }
  });
  return (
    <header className={`w-full fixed z-10 ${color ? "bg-white" : ""}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src="/img/fZ.jpg"
            alt=""
          />
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
          <span className="ml-3 text-xl not-italic text-black">
            Faris Saputra
          </span>
        </a>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav> */}
      </div>
    </header>
  );
}

export default Header;
