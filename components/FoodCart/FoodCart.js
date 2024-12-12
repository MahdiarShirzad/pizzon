import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCart = ({ food }) => {
  return (
    <div className="border-2 h-[460px] w-[380px] py-4 rounded-[8%]">
      <div className="w-64 h-64 relative mx-auto">
        <Image className="rounded-[30%]" src={food.img} alt={food.name} fill />
      </div>
      <h3 className="text-center mt-4 text-xl font-semibold">{food.name}</h3>
      <p className="mt-5 text-gray-600 text-center">{food.desc}</p>
      <p className="mt-3 text-gray-500 text-center text-sm">
        {food.ingredients.join(" / ")}
      </p>
      <Link
        className=" text-center block mt-4 text-orange-500 text-lg underline-offset-4 underline"
        href=""
      >
        اکنون سفارش دهید
      </Link>
    </div>
  );
};

export default FoodCart;
