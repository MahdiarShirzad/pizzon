// import Loading from "@/app/loading";
import FoodCart from "@/components/FoodCart/FoodCart";
import Spinner from "@/components/Spinner/Spinner";
import { getFoodsByCategory } from "@/services/apiFoods";
import { Suspense } from "react";

const Burger = async () => {
  const burgerData = await getFoodsByCategory("برگر");

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {burgerData.map((food) => (
          <FoodCart key={food.id} food={food} />
        ))}
      </Suspense>
    </>
  );
};

export default Burger;
