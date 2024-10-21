import Image from "next/image";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="bg-[#121619] h-[730px] relative flex items-center justify-center">
      <Image src="/assets/images/chefbg.png" fill alt="" />
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
