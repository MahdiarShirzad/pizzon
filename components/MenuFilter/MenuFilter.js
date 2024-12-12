import Link from "next/link";

const categories = [
  { name: "همه", key: "all" },
  { name: "پیتزا", key: "pizza" },
  { name: "برگر", key: "burger" },
  { name: "پاستا", key: "pasta" },
  { name: "سوخاری", key: "chicken" },
  { name: "پیش غذا", key: "appetizer" },
  { name: "نوشیدنی", key: "beverages" },
  { name: "سالاد", key: "salad" },
];

const MenuFilter = () => {
  return (
    <ul className=" flex justify-between items-center text-white mt-10 text-lg gap- bg-zinc-800 w-[750px] mx-auto rounded-full">
      {categories.map((category, index) => (
        <Link
          href={`/menu/`}
          className=" py-2 px-5  rounded-full bg"
          key={index}
        >
          {category.name}
        </Link>
      ))}
    </ul>
  );
};

export default MenuFilter;
