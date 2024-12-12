import MenuFilter from "@/components/MenuFilter/MenuFilter";
import Image from "next/image";

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

export default function MenuLayout({
  all,
  pizza,
  appetizer,
  beverages,
  burger,
  pasta,
  chcken,
  salad,
}) {
  return (
    <div>
      {/* Top Banner */}
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
      {/* Filters */}
      <MenuFilter />
      {/* Render Active Category Content */}
      <div className="py-16 container max-w-[1300px] mx-auto flex flex-wrap items-center justify-between">
        {all}
      </div>
    </div>
  );
}
