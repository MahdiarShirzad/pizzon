// import Loading from "@/app/loading";
import FoodCart from "@/components/FoodCart/FoodCart";
import Spinner from "@/components/Spinner/Spinner";
import { getFoodsByCategory } from "@/services/apiFoods";
import { Suspense } from "react";

const Pasta = async () => {
  const pastaData = await getFoodsByCategory("پاستا");

  return (
    <>
      {/* <Suspense fallback={<Spinner />}> */}
      {pastaData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
      {/* </Suspense> */}
    </>
  );
};

export default Pasta;
