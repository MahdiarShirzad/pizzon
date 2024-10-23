import Image from "next/image";
import React from "react";

const SpecialMenu = () => {
  const categories = ["همه", "پیتزا", "برگر", "پاستا", "پیش غذا", "نوشیدنی"];

  return (
    <div className="bg-black">
      <div className=" w-full h-[120px] relative">
        <Image src="/assets/images/menu-top-bg.png" fill alt="" />
      </div>
      <div className=" max-w-[1250px] mx-auto min-h-[700px] py-14">
        <p className="text-white text-center font-semibold text-[50px]">
          منوی ویژه ما
        </p>
        <p className=" text-center text-peach mt-4 text-lg">
          طعم‌های بی‌نظیر در منوی ویژه
        </p>
        <ul className=" flex justify-between items-center text-white mt-10 text-lg gap-4 bg-zinc-800 w-[650px] mx-auto rounded-full">
          {categories.map((category, index) => (
            <li className=" py-3 px-6  rounded-full" key={index}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full h-[120px] relative">
        <Image src="/assets/images/menu-bottom-bg.png" fill alt="" />
      </div>
    </div>
  );
};

export default SpecialMenu;
