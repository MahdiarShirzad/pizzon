import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoods } from "@/services/apiFoods";

const AllFoods = async () => {
  const foodData = await getFoods();

  return (
    <>
      {foodData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default AllFoods;
