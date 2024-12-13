import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Appetizer = async () => {
  const appetizerData = await getFoodsByCategory("پیش غذا");

  return (
    <>
      {appetizerData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Appetizer;
