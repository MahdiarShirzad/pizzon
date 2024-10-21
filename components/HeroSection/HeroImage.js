"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  const variants = {
    hidden: { y: -900, opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: index * 0.2, type: "spring" },
    }),
  };

  return (
    <div className="relative w-[550px] h-[550px] mt-20">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={0}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <Image
          src="/assets/images/pizza-banner-2.png"
          fill
          alt=""
          className="object-cover"
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={1}
        className="absolute top-3 right-40"
      >
        <Image
          src="/assets/images/pizza-7.png"
          width={110}
          height={110}
          alt=""
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="absolute bottom-1 right-1"
      >
        <Image
          src="/assets/images/pizza-8.png"
          width={110}
          height={110}
          alt=""
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={3}
        className="absolute top-32 -left-20"
      >
        <Image
          src="/assets/images/pizza-9.png"
          width={190}
          height={190}
          alt=""
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={4}
        className="absolute bottom-5 left-3"
      >
        <Image
          src="/assets/images/pizza-10.png"
          width={150}
          height={150}
          alt=""
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={5}
        className="absolute top-2 -left-16"
      >
        <Image
          src="/assets/images/pizza-11.png"
          width={160}
          height={160}
          alt=""
        />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={6}
        className="absolute top-0 right-1"
      >
        <Image
          src="/assets/images/pizza-12.png"
          width={120}
          height={120}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
