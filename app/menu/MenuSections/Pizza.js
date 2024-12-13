import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Pizza = async () => {
  const foodData = await getFoodsByCategory("پیتزا");
  // const pizzaData = foodData.filter((food) => food.category === "پیتزا");

  return (
    <>
      {foodData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Pizza;
