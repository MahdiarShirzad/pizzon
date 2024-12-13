import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Pasta = async () => {
  const pastaData = await getFoodsByCategory("پاستا");

  return (
    <>
      {pastaData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Pasta;
