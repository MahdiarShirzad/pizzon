import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1250px] mx-auto py-24">
        <p className="text-center text-peach text-2xl">
          از عشق به پیتزا شروع شد
        </p>
        <p className="text-[50px] font-semibold text-center">داستان ما</p>
        <p className=" max-w-[970px] text-center mx-auto mt-3 leading-7">
          پیزون از عشق به پیتزا آغاز شد؛ جایی که علاقه به غذاهای باکیفیت و
          لذت‌بخش ما را به خلق یک برند منحصر به فرد کشاند. هدف ما این بود که
          تجربه‌ای بی‌نظیر از طعم و کیفیت را به مشتریان ارائه دهیم. در هر مرحله،
          از انتخاب مواد اولیه تازه و سالم گرفته تا پخت دقیق در اجاق‌های
          پیشرفته، ما تلاش کرده‌ایم تا پیتزاهایی را ارائه کنیم که نه تنها خوشمزه
          باشند، بلکه خاطره‌ای خوش از یک وعده غذایی عالی برای شما بسازند.
        </p>
        <p className=" max-w-[970px] text-center mx-auto mt-3 leading-7">
          اما داستان ما فقط به غذا ختم نمی‌شود. ما به تحویل سریع و مطمئن نیز
          توجه داریم، تا غذا در بهترین شرایط به دست شما برسد. در پیزون، مشتریان
          همواره در اولویت هستند و ما به دنبال ایجاد لحظاتی خاص و به‌یادماندنی
          برای هر فرد هستیم که ما را انتخاب می‌کند. این داستان پیزون است،
          داستانی از عشق و تعهد به کیفیت.
        </p>
        <div className=" relative w-[215px] h-[60px] mx-auto mt-16">
          <Image
            className="object-cover"
            src="/assets/images/story.png"
            fill
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
