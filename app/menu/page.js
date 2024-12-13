import MenuFilter from "@/components/MenuFilter/MenuFilter";
import Image from "next/image";
import RenderedMenu from "@/components/RenderedMenu/RenderedMenu";
import { Suspense } from "react";
import Spinner from "@/components/Spinner/Spinner";

const Menu = ({ searchParams }) => {
  console.log(searchParams);

  const filter = searchParams?.category ?? "all";

  return (
    <div>
      {/* Top Banner */}
      <div className="relative w-full h-[400px] bg-[#00000094] flex items-center justify-center">
        <Image
          className="object-cover -z-10"
          src="/assets/images/menu-banner-1.png"
          fill
          alt="Menu Banner"
          quality={70}
        />
        <p className="text-white font-bold text-[55px] text-center">
          منوی غذا ها
        </p>
      </div>
      {/* Filters */}
      <MenuFilter />
      {/* Render Active Category Content */}
      <Suspense fallback={<Spinner />}>
        <RenderedMenu filter={filter} />
      </Suspense>
    </div>
  );
};

export default Menu;
