import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/HeroSection/Hero";
import OurSpecialty from "@/components/OurSpecialty/OurSpecialty";
import SpecialMenu from "@/components/SpecialMenu.js/SpecialMenu";
import { getFoods } from "@/services/apiFoods";
import { get } from "mongoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurSpecialty />
      <SpecialMenu />
      <AboutSection />
    </div>
  );
}
