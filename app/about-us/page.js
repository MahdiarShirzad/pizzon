import Image from "next/image";
import SectionOne from "./SectionOne";
import OurStory from "./OurStory";
import OurChef from "./OurChef";
import PizzonAtmosphere from "./PizzonAtmosphere";

const AboutUs = () => {
  return (
    <div className="">
      <div className="relative w-full h-[400px] bg-[#00000094] flex items-center justify-center">
        <Image
          className="object-cover -z-10"
          src="/assets/images/blog-7.jpg"
          fill
          alt=""
          quality={70}
        />
        <p className="text-white font-bold text-[55px] text-center">
          درباره ما
        </p>
      </div>
      <SectionOne />
      <OurStory />
      <OurChef />
      <PizzonAtmosphere />
    </div>
  );
};

export default AboutUs;
