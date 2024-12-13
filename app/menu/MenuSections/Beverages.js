import FoodCart from "@/components/FoodCart/FoodCart";
import { getBeverages } from "@/services/apiBeverages";
import React from "react";

const Beverages = async () => {
  const beveragesData = await getBeverages();

  return (
    <>
      {beveragesData.map((beverage) => (
        <FoodCart food={beverage} key={beverage.id} />
      ))}
    </>
  );
};

export default Beverages;
