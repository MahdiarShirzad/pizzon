"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SpecialtyCard = ({ imageSrc, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };

  return (
    <motion.div
      className=" w-[300px] h-[344px]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <div className="relative w-72 h-72 mx-auto hover:w-[300px] hover:h-[300px] transition-all duration-150">
        <Image
          className="object-cover rounded-[4.5rem]"
          src={imageSrc}
          fill
          alt=""
        />
      </div>
      <p className="text-center mt-4 text-lg font-semibold ">{title}</p>
    </motion.div>
  );
};

export default SpecialtyCard;
