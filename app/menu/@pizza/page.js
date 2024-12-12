import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoods } from "@/services/apiFoods";

const PizzaFoods = async () => {
  const foodData = await getFoods();
  const pizzaData = foodData.filter((food) => food.category === "پیتزا");

  return (
    <>
      {pizzaData.map((food) => (
        <FoodCart key={food.id} food={food} />
      ))}
    </>
  );
};

export default PizzaFoods;
