import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Burger = async () => {
  const burgerData = await getFoodsByCategory("برگر");

  return (
    <>
      {burgerData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Burger;
