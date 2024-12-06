import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/HeroSection/Hero";
import OurSpecialty from "@/components/OurSpecialty/OurSpecialty";
import SpecialMenu from "@/components/SpecialMenu.js/SpecialMenu";

import connectDB from "@/config/database";

export default function Home() {
  console.log(process.env.MONGODB_URI);

  connectDB();

  return (
    <div>
      <Hero />
      <OurSpecialty />
      <SpecialMenu />
      <AboutSection />
    </div>
  );
}
