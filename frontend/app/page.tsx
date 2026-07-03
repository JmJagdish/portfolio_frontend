import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/section/Hero";
import HeroStats from "@/components/section/HeroStats";
import AboutSection from "@/components/section/About";
import Projects from "@/components/section/Projects";
import WorkPlaces from "@/components/section/WorkPlace";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroStats />
      <AboutSection />
      <Projects />
      <WorkPlaces />
      <Footer />
    </>
  );
}
