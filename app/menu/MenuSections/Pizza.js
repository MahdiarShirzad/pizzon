// import Loading from "@/app/loading";
import FoodCart from "@/components/FoodCart/FoodCart";
import Spinner from "@/components/Spinner/Spinner";
import { getFoodsByCategory } from "@/services/apiFoods";
import { Suspense } from "react";

const Pizza = async () => {
  const foodData = await getFoodsByCategory("پیتزا");

  return (
    <>
      {/* <Suspense fallback={<Spinner />}> */}
      {foodData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
      {/* </Suspense> */}
    </>
  );
};

export default Pizza;
