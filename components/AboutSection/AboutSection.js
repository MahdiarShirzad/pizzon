"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
      type: "spring",
      stiffness: 250,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
      type: "spring",
      stiffness: 250,
      damping: 10,
    },
  },
};

const AboutSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="flex items-center justify-between gap-14 my-16 max-w-[1250px] mx-auto">
      <motion.div
        className="w-2/5"
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <p className="text-peach text-2xl">طعم، کیفیت، انتخاب</p>
        <p className="text-[65px] font-semibold">در مورد پیزون</p>
        <p className="font-light mt-5 leading-7">
          پیزون به عنوان یک برند برتر در ارائه پیتزاهای با کیفیت بالا و طعم
          بینظیر شناخته میشود. ما به دقت بالا در انتخاب مواد اولیه، تهیه غذا و
          خدمات تحویل سریع تمرکز داریم تا تجربهای بینظیر برای مشتریان خود فراهم
          آوریم
        </p>
        <Link
          className="border border-peach bg-peach text-white mt-9 inline-block text-lg font-normal px-6 py-3 rounded-full"
          href="about-us"
        >
          بیشتر ببینید
        </Link>
      </motion.div>
      <motion.div
        className="w-1/2"
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <div className="relative w-[470px] h-[400px]">
          <Image
            className="rounded-[30%]"
            src="/assets/images/pizza/pizza-home.webp"
            alt=""
            fill
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
