"use client";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import NavItems from "./NavItems";
import { HeaderLeft } from "./HeaderLeft";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const detectScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`${isScrolled ? "fixed" : "absolute"} top-0 inset-0 ${
        isScrolled ? "py-2" : "py-3"
      } z-30 ${
        isScrolled ? "h-[70px]" : "h-[80px]"
      } transition-all duration-200 ${isScrolled ? "bg-black" : ""}`}
    >
      <nav className="max-w-[1230px] mx-auto flex items-center justify-between text-white">
        <Logo isScrolled={isScrolled} />
        <NavItems />
        <HeaderLeft />
      </nav>
    </header>
  );
};

export default Header;
