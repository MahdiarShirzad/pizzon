"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 10,
      delay: 0.3,
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: -90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 10,
      delay: 0.6,
      duration: 0.3,
    },
  },
};

const PizzonAtmosphere = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="flex items-center justify-between max-w-[1250px] mx-auto py-20">
      <motion.div
        className="w-1/2"
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className=" relative w-[500px] h-[500px]">
          <Image
            className="object-cover rounded-[40%]"
            src="/assets/images/exterior.png"
            fill
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        className="w-2/5"
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <p className="text-peach text-2xl">پیزون، فضای دنج و دلپذیر</p>
        <p className="text-[65px] font-semibold">فضای پیزون</p>
        <p className="font-light mt-5 leading-7">
          پیزون نه‌تنها به غذاهای باکیفیت، بلکه به خلق فضایی گرم و دلنشین نیز
          توجه دارد. ما تلاش کرده‌ایم تا محیطی فراهم کنیم که مشتریان احساس راحتی
          کنند و لحظات خوشی را با دوستان و خانواده خود در آن سپری کنند. فضای
          بیرونی رستوران با طراحی زیبا و دعوت‌کننده، شما را به یک تجربه بی‌نظیر
          از صرف غذا در محیطی دوستانه و دلپذیر دعوت می‌کند.
        </p>
      </motion.div>
    </div>
  );
};

export default PizzonAtmosphere;
