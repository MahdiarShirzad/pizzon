import AllFoods from "@/app/menu/MenuSections/AllFoods";
import Appetizer from "@/app/menu/MenuSections/Appetizer";
import Beverages from "@/app/menu/MenuSections/Beverages";
import Burger from "@/app/menu/MenuSections/Burger";
import Chicken from "@/app/menu/MenuSections/Chicken";
import Pasta from "@/app/menu/MenuSections/Pasta";
import Pizza from "@/app/menu/MenuSections/Pizza";
import Salad from "@/app/menu/MenuSections/Salad";

const RenderedMenu = ({ filter }) => {
  if (filter == "salad") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Salad />
      </div>
    );
  }

  if (filter == "beverages") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Beverages />
      </div>
    );
  }

  if (filter == "appetizer") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Appetizer />
      </div>
    );
  }

  if (filter == "chicken") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Chicken />
      </div>
    );
  }

  if (filter == "pasta") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Pasta />
      </div>
    );
  }

  if (filter == "burger") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Burger />
      </div>
    );
  }

  if (filter == "pizza") {
    return (
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        <Pizza />
      </div>
    );
  }

  return (
    <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
      <AllFoods />
    </div>
  );
};

export default RenderedMenu;
