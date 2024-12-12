import FoodCart from "@/components/FoodCart/FoodCart";
import { getFoods } from "@/services/apiFoods";
import Image from "next/image";

const Menu = async () => {
  const foodData = await getFoods();

  console.log(foodData);

  return (
    <div>
      <div className="relative w-full h-[400px] bg-[#00000094] flex items-center justify-center">
        <Image
          className="object-cover -z-10"
          src="/assets/images/menu-banner-1.png"
          fill
          alt=""
          quality={70}
        />
        <p className="text-white font-bold text-[55px] text-center">
          منوی غذا ها
        </p>
      </div>

      <div className=" py-16 container max-w-[1200px] mx-auto flex items-center justify-center gap-12">
        {foodData.map((food) => (
          <FoodCart key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
