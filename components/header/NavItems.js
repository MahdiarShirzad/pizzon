import Link from "next/link";

const NavItems = () => {
  return (
    <div className=" flex items-center justify-between gap-12 ">
      <Link className="hover:text-peach" href="/">
        صفحه اصلی
      </Link>
      <Link className="hover:text-peach" href="">
        منو
      </Link>
      <Link className="hover:text-peach" href="about-us">
        درباره ما
      </Link>
      <Link className="hover:text-peach" href="contact-us">
        ارتباط با ما
      </Link>
    </div>
  );
};

export default NavItems;
