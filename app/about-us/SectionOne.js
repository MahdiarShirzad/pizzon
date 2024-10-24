"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
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
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 10,
      delay: 0.3,
      duration: 0.3,
    },
  },
};

const SectionOne = () => {
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
            src="/assets/images/interior.png"
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
        <p className="text-peach text-2xl">طعم، کیفیت، انتخاب</p>
        <p className="text-[65px] font-semibold">در مورد پیزون</p>
        <p className="font-light mt-5 leading-7">
          پیزون به عنوان یک برند برتر در ارائه پیتزاهای با کیفیت بالا و طعم
          بینظیر شناخته میشود. ما به دقت بالا در انتخاب مواد اولیه، تهیه غذا و
          خدمات تحویل سریع تمرکز داریم تا تجربهای بینظیر برای مشتریان خود فراهم
          آوریم
        </p>
      </motion.div>
    </div>
  );
};

export default SectionOne;
