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

const OurChef = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <div className="flex items-center justify-between max-w-[1250px] mx-auto py-20">
      <motion.div
        className="w-2/5"
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <p className="text-peach text-2xl">استاد طعم و کیفیت</p>
        <p className="text-[65px] font-semibold">سر آشپز ما</p>
        <p className="font-light mt-5 leading-7">
          سرآشپز ما، با سال‌ها تجربه در هنر آشپزی، توانسته است بهترین طعم‌ها را
          به منوی پیزون بیاورد. او با دقت و مهارت، هر پیتزا را به یک اثر هنری
          تبدیل می‌کند. از انتخاب مواد اولیه تازه تا تهیه و پخت نهایی، همه مراحل
          تحت نظارت دقیق او انجام می‌شود. تخصص او در ترکیب طعم‌ها و ایجاد
          غذاهایی بی‌نظیر، پیزون را به یکی از محبوب‌ترین رستوران‌ها تبدیل کرده
          است. در پیزون، کیفیت غذا نتیجه تلاش‌های بی‌وقفه سرآشپز ما است.
        </p>
      </motion.div>
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
            src="/assets/images/chef.png"
            fill
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OurChef;
