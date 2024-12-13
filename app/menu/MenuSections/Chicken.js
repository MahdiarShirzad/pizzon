import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoodsByCategory } from "@/services/apiFoods";

const Chicken = async () => {
  const chickenData = await getFoodsByCategory("سوخاری");

  return (
    <>
      {chickenData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default Chicken;
