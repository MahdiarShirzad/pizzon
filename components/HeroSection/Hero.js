import Image from "next/image";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroBottom from "./HeroBottom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#121619] h-[780px] relative flex items-center justify-center">
        <Image src="/assets/images/chefbg.png" fill alt="" />
        <HeroText />
        <HeroImage />
      </div>
      <HeroBottom />
    </>
  );
};

export default Hero;
