import AllFoods from "@/app/menu/MenuSections/AllFoods";
import Appetizer from "@/app/menu/MenuSections/Appetizer";
import Beverages from "@/app/menu/MenuSections/Beverages";
import Burger from "@/app/menu/MenuSections/Burger";
import Chicken from "@/app/menu/MenuSections/Chicken";
import Pasta from "@/app/menu/MenuSections/Pasta";
import Pizza from "@/app/menu/MenuSections/Pizza";
import Salad from "@/app/menu/MenuSections/Salad";

import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";

const menuComponents = {
  salad: Salad,
  beverages: Beverages,
  appetizer: Appetizer,
  chicken: Chicken,
  pasta: Pasta,
  burger: Burger,
  pizza: Pizza,
  all: AllFoods,
};

const RenderedMenu = ({ filter }) => {
  const SelectedComponent = menuComponents[filter] || AllFoods;
  return (
    <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
      {/* <Suspense fallback={<Spinner />}> */}
      <SelectedComponent />
      {/* </Suspense> */}
    </div>
  );
};

export default RenderedMenu;
