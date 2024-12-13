"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("category") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <ul className="flex justify-between items-center mt-10 text- gap-4 bg-zinc-300 w-[750px] mx-auto rounded-full">
      {categories.map((category) => (
        <li key={category.key}>
          <button
            onClick={() => handleFilter(category.key)}
            className={`py-3 px-5 rounded-full block ${
              activeFilter == category.key && "bg-peach text-white"
            }`}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MenuFilter;
