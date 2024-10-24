import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-zinc-950 text-white">
      <div className="max-w-[1250px] mx-auto py-32 grid grid-cols-3 gap-6">
        <div className="w-[380px]">
          <div className="relative w-44 h-14">
            <Image src="/assets/images/header-logo.png" alt="" fill />
          </div>
          <p className="mt-3">مازندران، ساری</p>
          <p className="mt-3">
            تلفن : <span className="">09384494884</span>
          </p>
          <p className="mt-3">ایمیل : mahdiar55582@gmail.com</p>
        </div>
        <div className="w-[380px] pl-14">
          <p className="text-2xl">ساعات کار</p>
          <div className="flex items-center justify-between mt-8">
            <p>شنبه تا چهارشنبه :</p>
            <p>8:00 تا 22:00</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p>پنج شنبه :</p>
            <p>8:00 تا 17:00</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p>جمعه :</p>
            <p>تعطیل</p>
          </div>
        </div>
        <div className="w-[380px]">
          <p className="text-2xl">دسترسی سریع</p>
          <ul className="mt-8 flex flex-col gap-2">
            <li>
              <p>سیاست حفظ حریم خصوصی</p>
            </li>
            <li>
              <p>رهگیری سفارش</p>
            </li>
            <li>
              <p>گارانتی و خدمات</p>
            </li>
            <li>
              <p>در باره</p>
            </li>
            <li>
              <p>با ما تماس بگیرید</p>
            </li>
            <li>
              <p>لیست علاقه مندیها</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
