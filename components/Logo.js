import Image from "next/image";
import logo from "@/public/assets/images/header-logo.png";

const Logo = ({ isScrolled }) => {
  return (
    <div>
      <Image
        className={`${isScrolled && "w-4/5"} ${
          isScrolled && "h-4/5"
        } transition-all duration-200 
        ${isScrolled && "mt-2"} 
        `}
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
