import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Salad = async () => {
  const saladData = await getFoodsByCategory("سالاد");

  return (
    <>
      {saladData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Salad;
