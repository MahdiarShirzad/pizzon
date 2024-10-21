import React from "react";
import Logo from "../Logo";
import NavItems from "./NavItems";
import { HeaderLeft } from "./HeaderLeft";

const Header = () => {
  return (
    <header className="absolute top-0 inset-0 py-4 z-30 ">
      <nav className="max-w-[1230px] mx-auto flex items-center justify-between text-white">
        <Logo />
        <NavItems />
        <HeaderLeft />
      </nav>
    </header>
  );
};

export default Header;
