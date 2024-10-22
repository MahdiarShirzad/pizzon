"use client";

import Typewriter from "typewriter-effect";

const HeroText = () => {
  return (
    <div className="w-1/2  text-white">
      <div className="text-[75px] font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('لذت خوشمزگی <span class="text-peach">پیتزا</span>')
              .start();
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 50,
            cursor: "",
            deleteSpeed: 0,
          }}
        />
      </div>
      <div className="mt-4 text-2xl">
        <Typewriter
          onInit={(typewriter) => {
            setTimeout(() => {
              typewriter
                .typeString(
                  '    <span class="text-peach text-3xl font-semibold" >پیزون</span> ، سفارش ویژه پیتزا با بهترین کیفیت و طعم 🍕'
                )
                .start();
            }, 1000);
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 20,
            cursor: "",
            deleteSpeed: 0,
          }}
        />
      </div>
    </div>
  );
};

export default HeroText;
