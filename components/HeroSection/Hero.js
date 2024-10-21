import Image from "next/image";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="bg-[#121619] h-[730px] relative flex items-center justify-center">
      <Image src="/assets/images/chefbg.png" fill alt="" />
      <HeroText />
      <div className="relative w-[550px] h-[550px] mt-20">
        <Image
          src="/assets/images/pizza-banner-2.png"
          fill
          alt=""
          className="object-cover"
        />
        <Image
          className="absolute top-3 right-40"
          src="/assets/images/pizza-7.png"
          width={110}
          height={110}
          alt=""
        />
        <Image
          src="/assets/images/pizza-8.png"
          className="absolute bottom-1 right-1"
          width={90}
          height={90}
          alt=""
        />
        <Image
          src="/assets/images/pizza-9.png"
          className="absolute top-32 -left-20"
          width={150}
          height={150}
          alt=""
        />
        <Image
          src="/assets/images/pizza-10.png"
          className="absolute bottom-5 left-5"
          width={120}
          height={120}
          alt=""
        />
        <Image
          src="/assets/images/pizza-11.png"
          className="absolute top-2 -left-16"
          width={150}
          height={150}
          alt=""
        />
        <Image
          src="/assets/images/pizza-12.png"
          className="absolute"
          width={90}
          height={90}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
